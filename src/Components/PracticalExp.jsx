import React, { useState } from 'react'

const PracticalExp = () => {
    const [practicalExp, SetPracticalExp] = useState({companyName: '', positionTitle: '', summary: '', dateFrom: '', dateUntil: ''});
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateUntil, setDateUntil] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleCompanyName = (e)=>{
        const newCompanyName = e.target.value;
        setCompanyName(newCompanyName);
        SetPracticalExp({companyName: newCompanyName, positionTitle: positionTitle, summary: summary, dateFrom: dateFrom, dateUntil: dateUntil})
    }
    const handlePositionTitle = (e)=>{
        const newPostionTitle = e.target.value;
        setPositionTitle(newPostionTitle);
        SetPracticalExp({companyName: companyName, positionTitle: newPostionTitle, summary: summary, dateFrom: dateFrom, dateUntil: dateUntil})
    }
    const handleSummary = (e)=>{
        const newSummary = e.target.value;
        setSummary(newSummary);
        SetPracticalExp({companyName: companyName, positionTitle: positionTitle, summary: newSummary, dateFrom: dateFrom, dateUntil: dateUntil})
    }
    const handleDateFrom = (e)=>{
        const newDateFrom = e.target.value;
        setDateFrom(newDateFrom);
        SetPracticalExp({companyName: companyName, positionTitle: positionTitle, summary: summary, dateFrom: newDateFrom, dateUntil: dateUntil})
    }
    const handleDateUntil = (e)=>{
        const newDateUntil = e.target.value;
        setDateUntil(newDateUntil);
        SetPracticalExp({companyName: companyName, positionTitle: positionTitle, summary: summary, dateFrom: dateFrom, dateUntil:newDateUntil})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmit(true);
    }

    const handleEdit = (e)=>{
        e.preventDefault();
        setSubmit(false);
    }
    return (
        <>
            <form action="">
                <fieldset>
                    <legend>Practical Experience</legend>
                    {submit ? (
                        <>
                            <p><i><b>Company's Name:</b> </i> {practicalExp.companyName}</p>
                            <p><i><b>Position Title:</b></i> {practicalExp.positionTitle}</p>
                            <p><i><b>Summary:</b></i> {practicalExp.summary}</p>
                            <p><i><b>Date From:</b></i> {practicalExp.dateFrom}</p>
                            <p><i><b>Date Until:</b></i> {practicalExp.dateUntil}</p>

                            <button onClick={handleEdit}>Edit</button>
                        </>
                    ) : (
                        <>
                            <label>Company's Name: </label>
                            <input type="text" value={companyName} onChange={handleCompanyName}/> <br /> <br />

                            <label>Position Title: </label> 
                            <input type="text" value={positionTitle} onChange={handlePositionTitle}/> <br /> <br />

                            <label>Summary: </label>
                            <textarea value={summary} onChange={handleSummary}/> <br /> <br />

                            <label>Date From:</label>
                            <input type="date" id="dateFrom" name="dateFrom" value={dateFrom} onChange={handleDateFrom}/> <br /><br />

                            <label>Until:</label>
                            <input type="date" id="until" name="until" value={dateUntil} onChange={handleDateUntil}/> <br /> <br />

                            <button onClick={handleSubmit}>Submit</button>
                        </>
                    )}
                </fieldset>
            </form>
        </>
    )
}

export default PracticalExp