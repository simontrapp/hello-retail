import React, { Component, PropTypes } from 'react'
import CategoryList from './category-list'
import CategoryDataSource from './category-data-source'

class CategoryPage extends Component {
  static propTypes = {
    AWS: PropTypes.shape({
      DynamoDB: PropTypes.func,
    }),
  }

  static defaultProps = {
    AWS: null,
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.categoriesLoaded = this.categoriesLoaded.bind(this)
  }

  categoriesLoaded(categories) {
    this.setState({
      categoryList: categories,
    })
  }

  render() {
    return (
      <div>
        <h4><em>Categories</em></h4>
        <CategoryList className="categoryList" categories={this.state.categoryList} />
        <CategoryDataSource AWS={this.props.AWS} categoriesLoaded={this.categoriesLoaded} />
      </div>
    )
  }
}

export default CategoryPage
