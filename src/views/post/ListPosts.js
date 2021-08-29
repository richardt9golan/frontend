import React, { Component } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CDataTable,
  CButton,
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import axios from 'axios'

const getBadge = status => {
  switch (status) {
    case 'Publised': return 'success'
    case 'Draft': return 'primary'
    case 'Trashed': return 'danger'
    default: return 'primary'
  }
}
const fields = ['title','content', 'category', 'status', 'action']
class ListPosts extends Component {
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
      console.log('data res:',res.data);
      this.setState({ articles });
    })
    .catch(error =>{
      console.log("Error",error);
    })
  }
  
  render(){
    const { articles } = this.state
    return (
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Data Posts
          
            </CCardHeader>
            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>
                      Published
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      Draft
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      Trashed
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>
                  <CRow>
                      <CCol xs="12" lg="12">
                        <CCard>
                          <CCardHeader>
                            Published List
                          </CCardHeader>
                          <CCardBody>
                          <CDataTable
                            items={articles}
                            fields={fields}
                            striped
                            itemsPerPage={5}
                            pagination
                            scopedSlots = {{
                              'status':
                                (item)=>(
                                  <td>
                                      <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                      </CBadge>
                                  </td>
                                  
                                ),
                                'action':
                                  (item)=>(
                                    <td>
                                        <CButton variant="ghost" color="success" to={"/edit/"+item.id}>
                                          <CIcon name="cil-pencil" />
                                        </CButton>
                                        <CButton variant="ghost" color="danger">
                                          <CIcon name="cil-trash" />
                                        </CButton>
                                    </td>
                                  )
                            }}
                          
                          />
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                  <CRow>
                      <CCol xs="12" lg="12">
                        <CCard>
                          <CCardHeader>
                            Draf List
                          </CCardHeader>
                          <CCardBody>
                          <CDataTable
                            items={articles}
                            fields={fields}
                            striped
                            itemsPerPage={5}
                            pagination
                            scopedSlots = {{
                              'status':
                                (item)=>(
                                  <td>
                                      <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                      </CBadge>
                                  </td>
                                ),
                                'action':
                                  (item)=>(
                                    <td>
                                        <CButton variant="ghost" color="success" to={"/edit/"+item.id}>
                                          <CIcon name="cil-pencil" />
                                        </CButton>
                                        <CButton variant="ghost" color="danger">
                                          <CIcon name="cil-trash" />
                                        </CButton>
                                    </td>
                                  )
                            }}
                          />
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                  <CRow>
                      <CCol xs="12" lg="12">
                        <CCard>
                          <CCardHeader>
                            Trashed List
                          </CCardHeader>
                          <CCardBody>
                          <CDataTable
                            items={articles}
                            fields={fields}
                            striped
                            itemsPerPage={5}
                            pagination
                            scopedSlots = {{
                              'status':
                                (item)=>(
                                  <td>
                                      <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                      </CBadge>
                                  </td>
                                ),
                                'action':
                                  (item)=>(
                                    <td>
                                        <CButton variant="ghost" color="success" to={"/edit/"+item.id}>
                                          <CIcon name="cil-pencil" />
                                        </CButton>
                                        <CButton variant="ghost" color="danger">
                                          <CIcon name="cil-trash" />
                                        </CButton>
                                    </td>
                                  )

                            }}
                          />
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}

export default ListPosts
