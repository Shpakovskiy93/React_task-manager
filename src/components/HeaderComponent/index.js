import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../../store/UserContext';

const HeaderWrapper = styled.div`
  padding: 30px 20px;
  position: relative;
  .iphone__x {
    width: 146px;
    height: 34px;
    left: 50%;
    transform: translate(-50%, -100%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: ${props => props.deviceBorderColor};
    top: 20px;
    position: absolute;
  }
`;
const LogoutWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderComponent = ({deviceBorderColor}) => {
  const day = new Date();
  let d_week = '';
  switch (day.getDay()) {
    case 1:
      d_week = 'Mon';
    break;
    case 2:
      d_week = 'Tue';
    break;
    case 3:
      d_week = 'Wed';
    break;
    case 4:
      d_week = 'Thu';
    break;
    case 5:
      d_week = 'Fri';
    break;
    case 6:
      d_week = 'Sat';
    break;
    case 0:
      d_week = 'Sun';
    break;
  
    default:
    break;
  }
  let month = 'Jan';
  switch (day.getMonth()) {
    case 0:
      month = 'Jan';
    break;
    case 1:
      month = 'Feb';
    break;
    case 2:
      month = 'Mar';
    break;
    case 3:
      month = 'Apr';
    break;
    case 4:
      month = 'May';
    break;
    case 5:
      month = 'Jun';
    break;
    case 6:
      month = 'Jul';
    break;
    case 7:
      month = 'Aug';
    break;
    case 8:
      month = 'Sep';
    break;
    case 9:
      month = 'Oct';
    break;
    case 10:
      month = 'Nov';
    break;
    case 11:
      month = 'Dec';
    break;
    default:
    break;
  }

  const {logoutAction} = useUserContext();
    return (
        <HeaderWrapper deviceBorderColor={deviceBorderColor}>
          <div className="iphone__x"></div>
          <h1>Hello</h1>
          <div className="greeting">
            {`Today ${d_week} ${day.getDate()} ${month}`}
          </div>
          <LogoutWrapper onClick={logoutAction}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </LogoutWrapper>
        </HeaderWrapper>
    )
}

HeaderComponent.propTypes = {deviceBorderColor: PropTypes.string}

export default HeaderComponent;