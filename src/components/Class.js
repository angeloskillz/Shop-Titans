import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

const Class = styled.div`
  position: relative;
  width: 280px;
  height: 245px;
  align-items: stretch;
  border-radius: 26px;
  background: #1a2327;
  border: 1.5px solid #daa54e;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
  cursor: pointer;
  outline: none;
    transition: .8s cubic-bezier(.2,.8,.2,1);
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    &:hover{
transform: scale(1.1);
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
box-shadow: 0px 10px 25px 1px rgba(218,165,78,0.3);
z-index: 1;
  }
`
const Sun = styled.img`
  display: block;
  margin: 0 auto;
`
const Title = styled.h1`
  font-family: "QuadratSerial";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  margin-top: -30px;
  text-transform: uppercase;
`
const Icons = styled.div`
  text-align: center;
`
const Icon1 = styled.img`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 20px;
`
const Icon2 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 20px;
  filter: blur(9px);
`

const SubDescription = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`
/* Modal */
const ScrollGroup = styled.div`
display: flex;
flex-direction: row;
vertical-align: middle;
`
const Scroll = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #daa54e;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 5px;
  width: fit-content;
  margin-left: 16px;
`
const Scrollimg = styled.img`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  margin-left: 16px;
`
const Scrolltype = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #ffffffb3;
  margin-top: 0px;
  width: fit-content;
  margin-left: 16px;
  margin-bottom:0px;
`
const Scrolldescription = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  color: #fff;
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
`


class Classbox extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div tabIndex="0">
        <Class onClick={this.handleOpenModal} tabIndex="0">
          <Sun src={require("../images/Sun.png")} />
          <Title>{this.props.name}</Title>
          <Icons>
            <Icon2 src={this.props.image} alt={this.props.title} />
            <Icon1 src={this.props.image} alt={this.props.title} />
          </Icons>
          <SubDescription>{this.props.description}</SubDescription>
        </Class>

        <ReactModal
          isOpen={this.state.showModal}
          className="Modal"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
        >
          <Sun src={require("../images/Sun.png")} />
          <Title>{this.props.name}</Title>
          <Icons>
            <Icon2 src={this.props.image} alt={this.props.title} />
            <Icon1 src={this.props.image} alt={this.props.title} />
          </Icons>
          <SubDescription>{this.props.description}</SubDescription>
          <img src={require('../images/Divider.png')} style={{ width: '200px', display: 'block', margin: '0 auto', marginBottom: '24px' }} alt='divider' />
          <div className='scrollable'>
          {this.props.stats.map((stat, index) => (
            <div key={index}>
              <ScrollGroup>
              <Scrollimg src={require(`../images/Classes/${stat.name}.jpg`)} alt={this.props.name} />
              <div>
              <Scroll>{stat.name}</Scroll>
                  <Scrolltype>{stat.type}</Scrolltype>
                </div>
                </ScrollGroup>
              <Scrolldescription>{stat.description}</Scrolldescription>
            </div>
          ))}
            <div className='gradientmodal'></div>
          </div>
          <button onClick={this.handleCloseModal} style={{ position: 'absolute', top: '0', right: '5px', width: '30px' }}>X</button>
        </ReactModal>
      </div>
    )
  }
}

export default Classbox
