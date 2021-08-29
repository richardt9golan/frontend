import React, { Component } from 'react'
import {
  CCardBody,
  CCard,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CButton,
  CCardFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

class AddPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: "",
            content: "",
            category: "",
            status : "Publised"
        }
    }

    handelChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handelSubmit = (event) =>{
        event.preventDefault()
        const data = this.state
        axios.post(`ci-rest/article`,data)
        .then(res => {
            console.log('data response : ',res.data);
        }).catch(error =>{
            console.log("Error",error);
        })
    }
    
    render(){
        return (
            <>
                <CCard>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handelSubmit}>
                    <CCardBody>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel><h2>Add Data Post</h2></CLabel>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                <CLabel htmlFor="title">Title</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput 
                                        name="title" 
                                        placeholder="Title" 
                                        value={this.title} 
                                        onChange={(event) =>  this.handelChange(event)}
                                    />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                <CLabel htmlFor="content">Content</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                <CTextarea 
                                    name="content"
                                    rows="9"
                                    placeholder="Content..."
                                    value={this.content}
                                    onChange={(event) =>  this.handelChange(event)} 
                                />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                <CLabel htmlFor="category">Category</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput
                                        name="category" 
                                        placeholder="Category" 
                                        value={this.category}
                                        onChange={(event) =>  this.handelChange(event)}
                                    />
                                </CCol>
                            </CFormGroup>
                        
                        </CCardBody>
                        <CCardFooter>
                        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                        <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CForm>

                </CCard>
            </>
            )
    }
  
}


export default AddPosts
