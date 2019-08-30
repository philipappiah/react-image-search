import React from 'react';



const Document = (props) =>{

    return (
        <div style={{marginLeft:'30%', width:'30%', marginTop:'-20%'}}>
        <div className = "ui placeholder segment">
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                No documents are listed for this customer.
            </div>
            <div className="ui primary button">Add Document</div>
        </div>
        </div>
    )
    
}

export default Document;