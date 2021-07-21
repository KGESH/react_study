import {type} from 'os';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavbarItem from 'components/navbar/NavbarItem';
import NavHiddenItem from 'components/navbar/NavHiddenItem';
import NavSearch from 'components/navbar/NavSearch';
import {
    item0,
    item000,
    item1,
    item001,
    item2,
    item002,
    item3,
    item003,
    item4,
    item004,
} from 'components/navbar/ClassList';
import 'components/navbar/style/Navbar.css';

type Props = {
    isLoggedIn: boolean,
};

const Navbar = ({isLoggedIn}: Props) => {
    const [isLogin, setIsLogin] = useState(isLoggedIn);

    const functiond = () => {
        isLogin ? (setIsLogin(false)) : (setIsLogin(true));
    }

    return (
        <div className="navbar__special">
            <div className="test_btn">
                <button onClick={functiond}>test: 로그인/로그아웃</button>
            </div>
            <div className="navbar__inner">

                {/* 로고 [home으로 이동 링크] */}
                <Link to="/">
                    <div id="nav__logo" className="nav__logo">Logo</div>
                </Link>


                <div className="nav__content">
                    <ul className="nav__content_list">

                        {/* All Product 항목 (마우스를 올리면 -> Hidden항목 활성화) */}
                        <div className="nav__content_item" onMouseOver={item0} onMouseOut={item000}>
                            <NavbarItem itemName="All Product" url="/"/>
                            <NavHiddenItem item="product"/>
                        </div>

                        {/* COFFEE 항목 (마우스를 올리면 -> Hidden항목 활성화) */}
                        <div className="nav__content_item" onMouseOver={item1} onMouseOut={item001}>
                            <NavbarItem itemName="COFFEE" url="/"/>
                            <NavHiddenItem item="coffee"/>
                        </div>

                        {/* GOODS 항목 (마우스를 올리면 -> Hidden항목 활성화) */}
                        <div className="nav__content_item" onMouseOver={item2} onMouseOut={item002}>
                            <NavbarItem itemName="GOODS" url="/"/>
                            <NavHiddenItem item="goods"/>
                        </div>

                        {/* ART COLLECTION 항목 (마우스를 올리면 -> Hidden항목 활성화) */}
                        <div className="nav__content_item" onMouseOver={item3} onMouseOut={item003}>
                            <NavbarItem itemName="ART COLLECTION" url="/"/>
                            <NavHiddenItem item="collection"/>
                        </div>

                        {/* SUBSCRIVE 항목 (마우스를 올리면 -> Hidden항목 활성화) */}
                        <div className="nav__content_item" onMouseOver={item4} onMouseOut={item004}>
                            <NavbarItem itemName="SUBSCRIVE" url="/"/>
                            <NavHiddenItem item="subscription"/>
                        </div>
                    </ul>

                    <div className="nav__right_box">

                        {/* 검색 창 */}
                        <div className="navbar__search">
                            <NavSearch/>
                        </div>

                        {/* 로그인 / 로그아웃 */}
                        {isLogin ? (
                            <div className="nav__member_box">
                                <div className="nav__login_member">
                                    <NavbarItem itemName="로그아웃" url="/"/>
                                </div>
                                <div className="nav__login_member">
                                    <NavbarItem itemName="마이페이지" url="/"/>
                                </div>
                                <div className="nav__cart">
                                    <NavbarItem itemName="장바구니" url="/"/>
                                </div>
                            </div>
                        ) : (
                            <div className="nav__member_box">
                                <div className="nav__login_member">
                                    <NavbarItem itemName="로그인" url="/Login"/>
                                </div>
                                <div className="nav__login_member">
                                    <NavbarItem itemName="회원가입" url="/"/>
                                </div>
                                <div className="nav__cart">
                                    <NavbarItem itemName="장바구니" url="/"/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 도매 서비스 [도매 판매 사이트 링크] */}
                <div className="nav__business">
                    <NavbarItem itemName="business" url="/business"/>
                </div>
            </div>
        </div>
    );

}

export default Navbar;

