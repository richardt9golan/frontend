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

class EditPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: "",
            content: "",
            category: "",
            status :""
        }
    }

    componentDidMount(){
        const id = this.props.location.search
        axios.get(`ci-rest/article`+id)
        .then(res => {
        const articles = res.data.data;
            // console.log('data:', articles);
        this.setState({ articles });
        })
        .catch(error =>{
        console.log("Error",error);
        })
    }


    handelChange = (event) => {
        // console.log('data event:', event.target.value);
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handelSubmit = (event) =>{
        event.preventDefault()
        console.log('Data : ', this.state);
    }
    
    render(){
        const {articles} = this.state
        return (
            <>
                <CCard>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handelSubmit}>
                                {articles && articles.map((article, keys) =>(
                                    <CCardBody key={keys}>
                                    <CFormGroup row>
                                        <CCol md="3">
                                            <CLabel><h2>Edit Data Post</h2></CLabel>
                                        </CCol>
                                    </CFormGroup>
                                    <CFormGroup row>
                                        <CCol md="3">
                                        <CLabel htmlFor="title">Title</CLabel>
                                        </CCol>
                                    <CCol xs="12" md="9" >
                                    <CInput 
                                        name="title" 
                                        placeholder="Title" 
                                        value={article.title} 
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
                                    value={article.content}
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
                                        value={article.category}
                                        onChange={(event) =>  this.handelChange(event)}
                                    />
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                         ))}
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


export default EditPosts
