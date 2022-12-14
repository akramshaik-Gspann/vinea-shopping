import React, { useState } from "react";
import '../../assets/scss/header.css';
import '../../assets/css/aem-grid.css';
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { FiShoppingBag } from 'react-icons/fi';
import venia from '../../assets/images/venia.png';

const Header = (props) => {
  const [loading, setLoading] = useState(false);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={350} />
          <Skeleton height={350} />
        </div>
      </>
    );
  }
  const ShowProducts = () => {
    return (
      <header className="header">
        <div className="headerHamburger">
          <div class="aem-GridColumn--phone--12">
            <div className="container">
              <div className="header__content">
                <div className="header__logo" >
                  <NavLink className="" to="/"><img src={venia} width="80"/></NavLink>
                </div>
                <div className="header__categories">
                  <ul>
                    <li><NavLink to="/" activeClassName="active" >Home</NavLink></li>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/men" >Men</NavLink></li>
                    <li><NavLink to="/electronics">Electronics</NavLink></li>
                    <li><NavLink to="/jewellery" >Jewellery</NavLink></li>
                  </ul>
                </div>
                <div className="header__icons">
                  <ul>
                    <li className="cartCount">
                      <NavLink to="/cart" className="">
                      <FiShoppingBag />{' '}
                        {props.countCartItems ? (
                          <button className="cartCount1">{props.countCartItems}</button>
                        ) : (
                          ''
                        )}
                      </NavLink>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="headerHamburger">
      <div className="">
        <div className="justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}

        </div>
      </div>
    </div>
  )
}
export default Header;
