import React, { useState } from 'react';
import Editor from '../../jodit-editor/Editor';

const EventForm = ({formData,handleChange,handleSubmit,setFormData}) => {
  // Initialize form state
 

  return (
    <div style={{ marginTop: '20px', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
  <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
        required
      />
    </div>

    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>Description</label>
      <Editor formData={formData} setFormData={setFormData} />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
      <div style={{ flex: '1' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Image</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          accept="image/*"
        />
      </div>

      <div style={{ flex: '1' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
          required
        />
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
      <div style={{ flex: '1' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
       
        />
      </div>

      <div style={{ flex: '1' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
       
        />
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
      <div style={{ flex: '1' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Opening Time</label>
        <input
          type="time"
          name="openingTime"
          value={formData.openingTime}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
          required
        />
      </div>

      <div style={{ flex: '1' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Close Time</label>
        <input
          type="time"
          name="closeTime"
          value={formData.closeTime}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
          required
        />
      </div>
    </div>

    <button
      type="submit"
      style={{
        backgroundColor: 'red',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop:'40px'
      }}
    >
      Submit Event
    </button>
  </form>
</div>

  );
};

export default EventForm;
