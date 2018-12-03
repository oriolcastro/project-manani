import React, { Component } from 'react'
import { withSize } from 'react-sizeme'
import { Document, Page } from 'react-pdf'
import { Grid, Icon } from 'semantic-ui-react'

class DocVisualizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNum: 0,
      lastPage: false,
      firstPage: true,
    }
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  checkPageNum

  prevPage() {
    if (this.state.pageNum === 1) {
      this.setState(prevState => ({
        pageNum: prevState.pageNum - 1,
        firstPage: true,
      }))
    } else if (this.state.pageNum > 1 && this.state.pageNum < 6) {
      this.setState(prevState => ({ pageNum: prevState.pageNum - 1 }))
    } else if (this.state.pageNum === 6) {
      this.setState(prevState => ({
        pageNum: prevState.pageNum - 1,
        lastPage: false,
      }))
    }
  }

  nextPage() {
    if (this.state.pageNum === 0) {
      this.setState(prevState => ({
        pageNum: prevState.pageNum + 1,
        firstPage: false,
      }))
    } else if (this.state.pageNum > 0 && this.state.pageNum < 5) {
      this.setState(prevState => ({ pageNum: prevState.pageNum + 1 }))
    } else if (this.state.pageNum === 5) {
      this.setState(prevState => ({
        pageNum: prevState.pageNum + 1,
        lastPage: true,
      }))
    }
  }

  render() {
    return (
      <Grid textAlign="center" centered verticalAlign="middle">
        <Grid.Row only="mobile" verticalAlign="middle">
          <Grid.Column width="4" textAlign="center">
            <Icon
              name="chevron left"
              size="big"
              aria-label="pàgina anterior"
              onClick={this.prevPage}
              disabled={this.state.firstPage}
            />
          </Grid.Column>
          <Grid.Column width="6" textAlign="center">
            <p>Pàgina {this.state.pageNum + 1}</p>
          </Grid.Column>
          <Grid.Column width="4" textAlign="center">
            <Icon
              name="chevron right"
              size="big"
              aria-label="pàgina seguent"
              onClick={this.nextPage}
              disabled={this.state.lastPage}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} only="tablet computer">
            <Icon
              name="chevron left"
              size="big"
              fitted
              aria-label="pàgina anterior"
              disabled={this.state.firstPage}
              onClick={this.prevPage}
            />
          </Grid.Column>
          <Grid.Column width={14}>
            <Document file={this.props.doc}>
              <Page
                pageIndex={this.state.pageNum}
                width={this.props.size.width - 80}
              />
            </Document>
          </Grid.Column>
          <Grid.Column width={1} only="tablet computer">
            <Icon
              name="chevron right"
              size="big"
              fitted
              aria-label="pàgina seguent"
              disabled={this.state.lastPage}
              onClick={this.nextPage}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withSize()(DocVisualizer)
