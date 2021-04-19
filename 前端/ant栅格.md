```
ant design的栅格和弹性布局很像


1.gutter就是间距
2.span 就是大小
<Row gutter={16}>
  <Col span={8}><div style={back}>1</div></Col>
  <Col span={8}><div style={back}>1</div></Col>
  <Col span={8}><div style={back}>1</div></Col>
</Row>


3.间距可以写成响应式
4.大小也可以写成响应式
 <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col span={6}><div style={back}>1</div></Col>
    <Col span={6}><div style={back}>1</div></Col>
    <Col span={6}><div style={back}>1</div></Col>
    <Col span={6}><div style={back}>1</div></Col>
  </Row>


5.右偏移
  offset  就是往右偏移
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col span={8}><div style={back}>1</div></Col>
    <Col span={8} offset={8}><div style={back}>1</div></Col>
  </Row>


  6.排序
  push往右推
  push往左推 
  其实也算偏移把
  <Row>
    <Col span={18} push={6}><div style={back}>1</div></Col>
    <Col span={6} pull={18}><div style={back}>1</div></Col>
  </Row>


  7.弹性布局排版
  排版时候就别用间距了，具体看情况
  排版时候所有列加起来不能24份，不然拍不了
  antd 2.0不支持
   <Row justify="start">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
  </Row>


  8.通过order排序和弹性盒一样

  antd2.0不行
   <Row>
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>

    9.弹性填充  就是五分之二和五分之三
    <Row>
      <Col flex={2}>2 / 5</Col>
      <Col flex={3}>3 / 5</Col>
    </Row>

    10.其他属性响应式
    span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。

    其中 xs={6} 相当于 xs={{ span: 6 }}。



    11.简写
    const obj = {
      xs: { span: 4 },
      sm: { span: 6 },
      md: { span: 8 },
      lg: { span: 8 },
      xl: { span: 8 },
      xxl: { span: 8 }

    };

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col {...obj}><div style={back}>1</div></Col>
      <Col {...obj}><div style={back}>1</div></Col>
      <Col {...obj}><div style={back}>1</div></Col>
    </Row>

```