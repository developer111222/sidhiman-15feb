import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentDetails } from '../../../action/paymentAction';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Sidebar from '../dashboard/Sidebar';

const AllPayment = () => {
  const dispatch = useDispatch();
  const { loading, error, payments } = useSelector(state => state.payment);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const paymentsPerPage = 15;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(getPaymentDetails());
  }, [dispatch, error]);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Payment Details', 20, 10);

    const tableColumn = ['Serial No', 'Name', 'Phone', 'Email', 'Amount (₹)', 'City', 'State', 'Status', 'Date'];
    const tableRows = [];

    filteredPayments.forEach((payment, index) => {
      const rowData = [
        index + 1,
        payment.data?.name || 'N/A',
        payment.data?.phone || 'N/A',
        payment.email || 'N/A',
        `Rs${(payment.amount / 100)}`,
        payment.data?.city || 'N/A',
        payment.data?.state || 'N/A',
        payment.status || 'N/A',
        new Date(payment.createdAt).toLocaleDateString(),
      ];
      tableRows.push(rowData);
    });

    doc.autoTable({ head: [tableColumn], body: tableRows, startY: 20 });
    doc.save('Payments.pdf');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPayments = payments.filter(payment => 
    (payment.data?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.data?.phone?.includes(searchTerm) ||
    payment.email?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = filteredPayments.slice(indexOfFirstPayment, indexOfLastPayment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <div style={{ marginLeft: '40px', padding: '20px', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2>All Payments</h2>
          <input
            type="text"
            placeholder="Search by name, phone, or email"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ padding: '8px', marginBottom: '10px', width: '250px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button
            onClick={exportToPDF}
            style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Export to PDF
          </button>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '1px solid #ccc' }}>
            <thead style={{ backgroundColor: '#343a40', color: 'white' }}>
              <tr>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial No</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Phone</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Email</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Amount (₹)</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>City</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>State</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Status</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {currentPayments.length > 0 ? (
                currentPayments.map((payment, index) => (
                  <tr key={payment.razorpayOrderId}>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{indexOfFirstPayment + index + 1}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{payment.data?.name || 'N/A'}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{payment.data?.phone || 'N/A'}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{payment.email || 'N/A'}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>₹{(payment.amount / 100).toFixed(2)}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{payment.data?.city || 'N/A'}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{payment.data?.state || 'N/A'}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{payment.status || 'N/A'}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{new Date(payment.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center', padding: '10px', color: '#999' }}>No payments found</td>
                </tr>
              )}
            </tbody>
          </table>
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            {Array.from({ length: Math.ceil(filteredPayments.length / paymentsPerPage) }, (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} style={{ margin: '5px', padding: '5px 10px', border: '1px solid #ccc', cursor: 'pointer', backgroundColor: currentPage === index + 1 ? 'blue' : 'white', color: currentPage === index + 1 ? 'white' : 'black' }}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPayment;
