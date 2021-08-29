import React,{Component} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from  '@coreui/react'

import axios from 'axios'

class PreviewPosts extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           article:[]
        }
      }

    componentDidMount(){

    axios.get(`ci-rest/article`)
    .then(res => {
        const articles = res.data.data;
        this.setState({ articles });
    })
    .catch(error =>{
        console.log("Error",error);
    })
    }
    render(){
        const {articles} = this.state
        return (
            <CRow>
                {articles && articles.map((article, index) =>(
                        <CCol xs="12" sm="6" md="4" key={index}>
                        <CCard>
                            <CCardHeader>
                            {article.title}
                            <div className="card-header-actions">
                                <CBadge color="success" className="float-right">{article.status}</CBadge>
                            </div>
                            </CCardHeader>
                            <CCardBody>
                            {article.content}
                            </CCardBody>
                        </CCard>
                        </CCol>
                    ))}
                
            </CRow>
        )
    }
}

export default PreviewPosts