import React, { Component } from 'react'
import {
  Row,
  Col,
  List
} from 'antd'
import axios from 'axios'
import SiderCustom from '../sider/siderCustom'
import { timetrans } from '../../utils/utils'
import { archive } from '../../constants/archive'
import './archive.css'
class Archive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      year: 2018,
      currentPage: 1
    }
    this.getBlogByYear = this.getBlogByYear.bind(this)
  }
  componentDidMount() {
    document.title = 'Water Blog'
    this.getBlogByYear(this.state.year)
  }
  getBlogByYear(year) {
    axios.get('/api/archive', {
      params: {
        year: year
      }
    })
    .then(res => {
      if(res.status === 200 && res.data.code === 0) {
        this.setState({
          data: res.data.data,
          year: res.data.year
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    const pagination = {
      pageSize: 1,
      current: this.state.currentPage,
      total: archive.length,
      size: 'small',
      onChange: ((page, pageSize) => {
        this.setState({
          currentPage: page
        })
        this.getBlogByYear(archive.filter(v => v.index === page)[0].year)
      })
    }
    return (
      <div>
        <Row>
          <Col
            lg={{ span: 15, offset: 1 }}
            md={{ span: 15, offset: 1 }}
            xs={{ span: 24 }}
            className="archive-wrapper"
          >
            <List
              itemLayout="vertical"
              header={this.state.year}
              pagination={pagination}
              dataSource={this.state.data.rows}
              className="archive-list"
              renderItem={item => (
                <List.Item
                  key={item.title}
                  extra={timetrans(item.created_at)}
                  style={{cursor: 'pointer'}}
                >
                  <List.Item.Meta
                    description={item.title}
                    onClick={()=>this.props.history.push(`/app/blog/desc/${item.id}`)}
                  />
                </List.Item>
              )}
            >
            </List>
          </Col>
          <Col
            lg={{ span: 6, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            xs={{ span: 0 }}
          >
            <SiderCustom />
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col
            lg={{ span: 0 }}
            md={{ span: 0 }}
            xs={{ span: 24 }}
          >
            <SiderCustom />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Archive