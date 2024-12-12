import React, { useState } from 'react'

const EducationalExp = () => {
    const [experience, SetExperience] = useState({schoolName: '', titleOfStudy: '', dateOfStudy: '' })
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [submit, setSubmit] = useState(false);
    const [fields, setFields] = useState([]);

    const handleSchoolName = (e)=>{
        const newSchoolName = e.target.value
        setSchoolName(newSchoolName);
        SetExperience({schoolName: newSchoolName, titleOfStudy: titleOfStudy, dateOfStudy: dateOfStudy })
    }
    const handleTitleOfStudy = (e)=>{
        const newTitleOfStudy = e.target.value
        setTitleOfStudy(newTitleOfStudy);
        SetExperience({schoolName: schoolName, titleOfStudy: newTitleOfStudy, dateOfStudy: dateOfStudy })
    }
    const handledateOfStudy = (e)=>{
        const newDateOfStudy = e.target.value
        setDateOfStudy(newDateOfStudy);
        SetExperience({schoolName: schoolName, titleOfStudy: titleOfStudy, dateOfStudy: newDateOfStudy})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmit(true);
        SetExperience({schoolName: schoolName, titleOfStudy: titleOfStudy, 
        dateOfStudy: dateOfStudy, additionalFields: fields.map((field) => field.value),})
    }
    const handleEdit = (e)=>{
        e.preventDefault();
        setSubmit(false);
    }

    const handleAddField = (e) => {
        e.preventDefault();
        const newFieldId = Date.now(); // Use a unique ID for each field
        setFields([...fields, newFieldId]);
    };
    
    const handleDeleteField = (id) => {
        setFields(fields.filter((fieldId) => fieldId !== id));
    };

  return (
    <>
        <form action="">
            <fieldset>
                <legend>Educational Experience</legend>
                {submit ? (
                    <>
                        <p><i><b>School Name:</b></i> {experience.schoolName}</p>
                        <p><i><b>Title Of Study:</b></i> {experience.titleOfStudy}</p>
                        <p><i><b>Date Of Study:</b></i>{experience.dateOfStudy}</p>

                        <button onClick={handleEdit}>Edit</button>
                    </>
                ) : (
                    <div id='container'>
                        <label>School Name: </label>
                        <input type="text" value={schoolName} onChange={handleSchoolName}/> <br /> <br />

                        <div id='inputContainer'>
                            <>
                                {fields.map((fieldId) => (
                                    <div key={fieldId} id={`field-${fieldId}`}>
                                        <label>School Name: </label>
                                        <input type="text" />
                                        <button onClick={() => handleDeleteField(fieldId)}>
                                        Delete Field
                                        </button>
                                        <br /><br />
                                    </div>
                                ))}
                            </>
                        </div>

                        <label>Title Of Study: </label>
                        <input type="text" value={titleOfStudy} onChange={handleTitleOfStudy}/> <br /> <br />

                        <label>Date Of Study: </label>
                        <input type="date" value={dateOfStudy} onChange={handledateOfStudy}/> <br /> <br />


                        <button onClick={handleAddField}>Add School Field</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                )}
            </fieldset>
        </form>
    </>
  )
}

export default EducationalExp