import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import { Grid, Icon } from 'semantic-ui-react'

export default class DocVisualizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNum: 0,
      pageWidth: 600,
    }
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  prevPage() {
    this.setState(prevState => ({ pageNum: prevState.pageNum - 1 }))
  }

  nextPage() {
    this.setState(prevState => ({ pageNum: prevState.pageNum + 1 }))
  }

  render() {
    return (
      <Grid textAlign="center" centered verticalAlign="middle">
        <Grid.Row only="tablet computer">
          <Grid.Column width={1}>
            <Icon
              name="chevron left"
              size="big"
              fitted
              aria-label="pàgina anterior"
              onClick={this.prevPage}
            />
          </Grid.Column>
          <Grid.Column width={14}>
            <Document file={this.props.doc}>
              <Page pageIndex={this.state.pageNum} width={650} />
            </Document>
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon
              name="chevron right"
              size="big"
              fitted
              aria-label="pàgina seguent"
              onClick={this.nextPage}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
