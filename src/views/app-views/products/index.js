import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table, Button, Row, Col, Select, Input } from 'antd'
import { EyeOutlined, PlusCircleOutlined } from '@ant-design/icons'
import ProductImage from '../../../components/ProductImage'
import {
  getProductsAction,
  searchById,
  searchByMarket,
  searchByKeyword,
  changeProductStatusAction,
  searchByCategory,
} from '../../../redux/actions/Product'
import {
  getMarketsAction,
  getCategoryAction,
} from '../../../redux/actions/AppData'
import { filterProducts } from '../../../redux/selectors'
// import UserInfo from "../../../components/UserInfo";
import './styles.css'

const Products = (props) => {
  const { dispatch, products, loading, markets, total, categories } = props
  const [productStatus, setProductStatus] = useState('Enabled')
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(50)
  const history = useHistory()

  useEffect(() => {
    dispatch(getProductsAction({ status: 'Enabled', current, pageSize }))
    dispatch(getMarketsAction())
    dispatch(getCategoryAction())
  }, [])

  const changeProductStatus = (e) => {
    setProductStatus(e)
    dispatch(getProductsAction({ status: e }))
  }

  const navigateToAddProduct = () => {
    history.push('/add-product')
  }
  const navigateToDetails = (id) => {
    history.push(`/product-details/${id}`)
  }

  const columns = [
    {
      title: 'Seller Name',
      dataIndex: 'sellerName',
      key: 'id',
    },
    {
      title: 'Market',
      dataIndex: 'market',
      key: 'id',
    },
    {
      title: 'Sale Limit',
      dataIndex: 'saleLimitDay',
      key: 'id',
    },
    {
      title: 'Remaining Order',
      dataIndex: 'saleLimitDayLeft',
      key: 'id',
    },
    {
      title: 'Commision',
      dataIndex: 'commission',
      key: 'id',
    },
    {
      title: 'Category',
      dataIndex: 'productCategory',
      key: 'id',
    },
    {
      title: 'Keyword',
      dataIndex: 'keyword',
      key: 'id',
      render: (keyword) => <p className="keyword">{keyword}</p>,
    },
    {
      title: 'Product ID',
      dataIndex: 'productId',
      key: 'id',
    },
    {
      title: 'Image',
      dataIndex: '',
      key: 'id',
      render: (cell) => <ProductImage image={cell.image} id={cell.productId} />,
    },
    {
      title: '',
      dataIndex: '',
      key: 'id',
      render: (cell) => (
        <Button
          type="primary"
          className="btnAddProduct"
          size="small"
          onClick={() => {
            navigateToDetails(cell.productId)
          }}
          icon={<EyeOutlined />}
        >
          View
        </Button>
      ),
    },
    {
      title: '',
      dataIndex: '',
      key: 'id',
      render: (cell) => {
        return (
          <Button
            type="primary"
            size="small"
            onClick={() => editProductStatus(cell.status, cell.productId)}
          >
            {cell.status}
          </Button>
        )
      },
    },
  ]

  const editProductStatus = (oldStatus, productId) => {
    if (oldStatus === 'Enabled') {
      dispatch(changeProductStatusAction({ productId, status: 'Disabled' }))
    } else {
      dispatch(changeProductStatusAction({ productId, status: 'Enabled' }))
    }
  }

  const onSearchById = (e) => {
    dispatch(searchById(parseInt(e)))
  }
  const onSearchByMarket = (e) => {
    dispatch(searchByMarket(e))
  }
  const onSearchByKeyword = (e) => {
    dispatch(searchByKeyword(e))
  }
  const onSearchByCategory = (e) => {
    dispatch(searchByCategory(e))
  }
  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination
    setPageSize(pageSize)
    dispatch(getProductsAction({ status: 'Enabled', current, pageSize }))
  }
  const { Search } = Input
  const { Option } = Select
  return (
    <>
      <div className="headerProducts">
        <h4 className="productsTitle">Products</h4>
        <Button
          type="primary"
          size="small"
          className="btnAddProduct"
          onClick={navigateToAddProduct}
          icon={<PlusCircleOutlined />}
        >
          Add Product
        </Button>
      </div>
      <Row
        gutter={[0, { xs: 16, sm: 16, md: 16, lg: 0 }]}
        style={{ marginBottom: '20px' }}
      >
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Search
            placeholder="Search by product code"
            enterButton
            allowClear
            onSearch={onSearchById}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="Search by keyword"
            enterButton
            allowClear
            onSearch={onSearchByKeyword}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Filter Market"
            onSelect={onSearchByMarket}
            allowClear
            onClear={() => dispatch(searchByMarket(''))}
          >
            {markets &&
              markets.map((market) => (
                <Option value={market.name}>{market.name}</Option>
              ))}
          </Select>
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            style={{ width: '100%' }}
            placeholder="Products Status"
            value={productStatus}
            onChange={changeProductStatus}
          >
            <Option value="Enabled">Enabled</Option>
            <Option value="Disabled">Disabled</Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ marginTop: '10px' }}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Filter Category"
            onSelect={onSearchByCategory}
            allowClear
            onClear={() => dispatch(searchByCategory(''))}
          >
            {categories &&
              categories.map((category) => (
                <Option value={category.name}>{category.name}</Option>
              ))}
          </Select>
        </Col>
      </Row>
      <div className="cardProducts">
        <Table
          dataSource={products}
          columns={columns}
          scroll={{ x: true }}
          loading={loading}
          onChange={handleTableChange}
          pagination={{
            total: total, // total count returned from backend,
            pageSize,
          }}
        />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { loading, total } = state.products
  const { categories, markets } = state.appData
  return {
    products: filterProducts(state.products),
    loading,
    categories,
    markets,
    total,
  }
}

export default connect(mapStateToProps)(Products)
