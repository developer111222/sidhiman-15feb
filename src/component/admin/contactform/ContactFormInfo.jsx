import React, { useEffect, useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getForms, deleteForm } from "../../../action/contactformAction";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ContactFormInfo = () => {
  const dispatch = useDispatch();
  const { error, forms, isdelete, message, loading } = useSelector(
    (state) => state.contactform
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const formsPerPage = 5;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isdelete) {
      toast.success(message);
    }

    dispatch(getForms());
  }, [isdelete, error, dispatch]);

  // Ensure `forms` is an array before filtering
  const formList = Array.isArray(forms) ? forms : [];

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter forms based on search term
  const filteredForms = formList.filter(
    (form) =>
      form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.phone.includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastForm = currentPage * formsPerPage;
  const indexOfFirstForm = indexOfLastForm - formsPerPage;
  const currentForms = filteredForms.slice(indexOfFirstForm, indexOfLastForm);

  const totalPages = Math.ceil(filteredForms.length / formsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Export to PDF function
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Contact Forms Report", 14, 10);

    const tableColumn = ["Serial No", "Name", "Email", "Phone", "Question"];
    const tableRows = [];

    filteredForms.forEach((form, index) => {
      const formData = [
        index + 1,
        form.name,
        form.email,
        form.phone,
        form.question,
      ];
      tableRows.push(formData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("ContactForms.pdf");
  };

  return (
    <section style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <div style={{ marginLeft: "40px", padding: "20px", width: "100%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2>All Form Info</h2>

          {/* Export to PDF Button */}
          <button
            onClick={exportToPDF}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "10px",
              float: "right",
            }}
          >
            Export to PDF
          </button>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by name, email, or phone"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: "8px",
              marginBottom: "10px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />

          {/* Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
              border: "1px solid #ccc",
            }}
          >
            <thead style={{ backgroundColor: "#343a40", color: "white" }}>
              <tr>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Serial No
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Name
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Email
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Phone
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Question
                </th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentForms.length > 0 ? (
                currentForms.map((form, index) => (
                  <tr key={form._id}>
                    <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                      {indexOfFirstForm + index + 1}
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                      {form.name}
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                      {form.email}
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                      {form.phone}
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                      {form.question}
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                      <button
                        onClick={() => dispatch(deleteForm(form._id))}
                        style={{
                          backgroundColor: "#dc3545",
                          color: "white",
                          padding: "8px 16px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "#999",
                    }}
                  >
                    No forms found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {filteredForms.length > formsPerPage && (
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                style={{
                  padding: "8px 16px",
                  marginRight: "10px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                style={{
                  padding: "8px 16px",
                  marginLeft: "10px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormInfo;
