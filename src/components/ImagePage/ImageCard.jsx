import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setRowSpan);
  }

  setRowSpan = () => {
    console.log('RS ', this.imageRef.current.clientHeight);
    const imageHeight = this.imageRef.current.clientHeight;
    const noOfSpan = Math.ceil((imageHeight / 10) + 1);
    this.setState({ span: noOfSpan });
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.small} alt={description} />
      </div>
    );
  }
}

export default ImageCard