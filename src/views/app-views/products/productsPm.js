<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button, Row, Col, Select, Input, Spin, message } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import ProductImage from "../../../components/ProductImage";
=======
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table, Button, Row, Col, Select, Input, Spin, message } from 'antd'
import { EyeOutlined, EditOutlined } from '@ant-design/icons'
import ProductImage from '../../../components/ProductImage'
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
import {
  getProductsPmAction,
  searchById,
  searchByMarket,
  searchByKeyword,
  searchByCategory,
<<<<<<< HEAD
  searchBySellerId,
} from "../../../redux/actions/Product";
// import { filterProducts } from "../../../redux/selectors";
import { reserveProductAction } from "../../../redux/actions/Reservations";
import {
  getMarketsAction,
  getCategoryAction,
} from "../../../redux/actions/AppData";
import UserInfo from "../../../components/UserInfo";
import "./styles.css";
=======
} from '../../../redux/actions/Product'
import { filterProducts } from '../../../redux/selectors'
import { reserveProductAction } from '../../../redux/actions/Reservations'
import {
  getMarketsAction,
  getCategoryAction,
} from '../../../redux/actions/AppData'
import UserInfo from '../../../components/UserInfo'
import './styles.css'
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3

const Products = (props) => {
  const {
    dispatch,
    products,
    loading,
    reserving,
    markets,
    total,
    categories,
    currentNumber,
    sizePage,
<<<<<<< HEAD
  } = props;
  const history = useHistory();

  const [current, setCurrent] = useState(currentNumber);
  const [pageSize, setPageSize] = useState(sizePage);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [productCode, setProductCode] = useState("");
  const [market, setMarket] = useState("");
  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    if (current !== 1) {
      setCurrent(current - 1);
      handleTableChange({ current: current - 1, pageSize });
    }
    dispatch(
      getProductsPmAction({
        status: "Enabled",
        public: false,
        current,
        pageSize,
      })
    );
    dispatch(getMarketsAction());
    dispatch(getCategoryAction());
  }, []);

  // window.addEventListener("popstate", () => {
  //   window.removeEventListener("popstate", () => {
  //     console.log("Go back");
  //   });
  //   if (current === 1) {
  //     history.goBack();
  //   } else {
  //     history.push("/products");
  //     let currentPageNumber = current - 1;
  //     setCurrent(currentPageNumber);
  //     handleTableChange({ currentPageNumber, pageSize });
  //   }
  // });
  // window.addEventListener("popstate", (e) => {
  //   console.log(e);
  // });
  const onReserveProduct = (id, saleLimitDayLeft) => {
    if (saleLimitDayLeft === 0) {
      return message.warning("Daily sale limit reached for this product");
    }
    dispatch(reserveProductAction({ productId: id }));
  };

  const navigateToDetails = (id) => {
    history.push(`/product-details/${id}`);
  };

  const columns = [
    {
      title: "Seller Name",
      dataIndex: "User",
      key: "id",
      render: (user) => <UserInfo user={user} />,
    },
    {
      title: "Market",
      dataIndex: "market",
      key: "id",
    },
    {
      title: "Sale Limit",
      dataIndex: "saleLimitDay",
      key: "id",
    },
    {
      title: "Remaining Order",
      dataIndex: "saleLimitDayLeft",
      key: "id",
    },
    {
      title: "Commision",
      dataIndex: "commission",
      key: "id",
    },
    {
      title: "Category",
      dataIndex: "productCategory",
      key: "id",
    },
    {
      title: "Keyword",
      dataIndex: "keyword",
      key: "id",
      render: (keyword) => <p className="keyword">{keyword}</p>,
    },
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "",
      key: "id",
      render: (cell) => <ProductImage image={cell.image} id={cell.productId} />,
    },
    {
      title: "",
      dataIndex: "",
      key: "id",
=======
  } = props
  const history = useHistory()
  const [current, setCurrent] = useState(currentNumber)
  const [pageSize, setPageSize] = useState(sizePage)

  useEffect(() => {
    dispatch(
      getProductsPmAction({
        status: 'Enabled',
        public: false,
        current,
        pageSize,
      }),
    )
    dispatch(getMarketsAction())
    dispatch(getCategoryAction())
  }, [])

  const onReserveProduct = (id, saleLimitDayLeft) => {
    if (saleLimitDayLeft === 0) {
      return message.warning('Daily sale limit reached for this product')
    }
    dispatch(reserveProductAction({ productId: id }))
  }

  const navigateToDetails = (id) => {
    history.push(`/product-details/${id}`)
  }

  const columns = [
    {
      title: 'Seller Name',
      dataIndex: 'User',
      key: 'id',
      render: (user) => <UserInfo user={user} />,
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
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
      render: (cell) => (
        <Button
          type="primary"
          className="btnAddProduct"
          size="small"
          onClick={() => {
<<<<<<< HEAD
            navigateToDetails(cell.productId);
=======
            navigateToDetails(cell.productId)
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
          }}
          icon={<EyeOutlined />}
        >
          View
        </Button>
      ),
    },
    {
<<<<<<< HEAD
      title: "",
      dataIndex: "",
      key: "id",
=======
      title: '',
      dataIndex: '',
      key: 'id',
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
      render: (cell) => (
        <Button
          type="primary"
          size="small"
          onClick={() => {
<<<<<<< HEAD
            onReserveProduct(cell.productId, cell.saleLimitDayLeft);
=======
            onReserveProduct(cell.productId, cell.saleLimitDayLeft)
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
          }}
          icon={<EditOutlined />}
        >
          Reserve
        </Button>
      ),
    },
<<<<<<< HEAD
  ];

  const onSearchById = (e) => {
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket("");
    setProductCode(e);

    dispatch(searchById({ productId: parseInt(e), current: 1, pageSize }));
  };
  const onSearchByMarket = (e) => {
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket(e);
    setProductCode("");
    dispatch(searchByMarket({ market: e, current: 1, pageSize }));
  };
  const onSearchByKeyword = (e) => {
    setCurrent(1);
    setCategory("");
    setKeyword(e);
    setMarket("");
    setProductCode("");
    dispatch(searchByKeyword({ keyword: e, current: 1, pageSize }));
  };
  const onSearchByCategory = (e) => {
    setCurrent(1);
    setCategory(e);
    setKeyword("");
    setMarket("");
    setProductCode("");
    dispatch(searchByCategory({ productCategory: e, current: 1, pageSize }));
  };

  const onSearchBySellerId = (e) => {
    setSellerId(e);
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket("");
    setProductCode("");
    dispatch(searchBySellerId({ sellerId: e, current: 1, pageSize }));
  };
  useEffect(() => {
    let params = new URLSearchParams(props.location.search);
    const number = params.get("pageNumber");
    if (current !== 1 && number < current) {
      setCurrent(current - 1);
      handleTableChange({ current: current - 1, pageSize });
    }
  }, [props.location.search]);
  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination;
    // history.push(`/products/pageNumber=${current}`);
    history.push({
      pathname: "/products",
      search: `?pageNumber=${current}`,
    });
    setPageSize(pageSize);

    setCurrent(current);
    if (keyword) {
      return dispatch(searchByKeyword({ keyword: keyword, current, pageSize }));
    }

    if (category) {
      return dispatch(
        searchByCategory({ productCategory: category, current, pageSize })
      );
    }
    if (market) {
      return dispatch(searchByMarket({ market, current, pageSize }));
    }
    if (productCode) {
      return dispatch(
        searchById({ productId: productCode, current, pageSize })
      );
    }

    if (sellerId) {
      return dispatch(
        searchBySellerId({ sellerId: sellerId, current, pageSize })
      );
    }
    dispatch(
      getProductsPmAction({
        status: "Enabled",
        public: false,
        current,
        pageSize,
      })
    );
  };

  const handleClear = () => {
    dispatch(
      getProductsPmAction({
        status: "Enabled",
        public: false,
        current,
        pageSize,
      })
    );
  };
  const { Search } = Input;
  const { Option } = Select;
=======
  ]

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
    setCurrent(current)
    dispatch(
      getProductsPmAction({
        status: 'Enabled',
        public: false,
        current,
        pageSize,
      }),
    )
  }
  const { Search } = Input
  const { Option } = Select
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
  return (
    <>
      <div className="headerProducts">
        <h4 className="productsTitle">Products</h4>
      </div>
      <Row
        gutter={[0, { xs: 16, sm: 16, md: 16, lg: 0 }]}
<<<<<<< HEAD
        style={{ marginBottom: "20px" }}
=======
        style={{ marginBottom: '20px' }}
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
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
<<<<<<< HEAD
            required
=======
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            showSearch
<<<<<<< HEAD
            style={{ width: "100%" }}
            placeholder="Filter Market"
            onSelect={onSearchByMarket}
            allowClear
            // onClear={() => dispatch(searchByMarket(""))}
            onClear={() => handleClear()}
=======
            style={{ width: '100%' }}
            placeholder="Filter Market"
            onSelect={onSearchByMarket}
            allowClear
            onClear={() => dispatch(searchByMarket(''))}
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
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
            showSearch
<<<<<<< HEAD
            style={{ width: "100%" }}
            placeholder="Filter Category"
            onSelect={onSearchByCategory}
            allowClear
            // onClear={() => dispatch(searchByCategory(""))}
            onClear={() => handleClear()}
=======
            style={{ width: '100%' }}
            placeholder="Filter Category"
            onSelect={onSearchByCategory}
            allowClear
            onClear={() => dispatch(searchByCategory(''))}
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
          >
            {categories &&
              categories.map((category) => (
                <Option value={category.name}>{category.name}</Option>
              ))}
          </Select>
        </Col>
<<<<<<< HEAD
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Search
            style={{ marginTop: "10px" }}
            placeholder="Search by seller id"
            enterButton
            allowClear
            onSearch={onSearchBySellerId}
          />
        </Col>
=======
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
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
            current,
          }}
        />
      </div>
      {reserving && (
        <div className="loadingSpin">
          <Spin />
        </div>
      )}
    </>
<<<<<<< HEAD
  );
};

const mapStateToProps = (state) => {
  const { loading, total, sizePage, currentNumber, products } = state.products;
  const { categories, markets } = state.appData;

  return {
    products,
=======
  )
}

const mapStateToProps = (state) => {
  const { loading, total, sizePage, currentNumber } = state.products
  const { categories, markets } = state.appData
  return {
    products: filterProducts(state.products),
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    categories,
    markets,
    loading,
    total,
    sizePage,
    currentNumber,
<<<<<<< HEAD
  };
};

export default connect(mapStateToProps)(Products);
=======
  }
}

export default connect(mapStateToProps)(Products)
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
