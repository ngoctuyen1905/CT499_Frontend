<template>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #e3f2fd;">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style="margin-top:-15px ;"><span style="color:red;font-size: 40px;font-weight:900 ;">T</span><span
                            style="color:blue;font-size: 30px;font-weight:700 ;">N</span><span
                            style="color:red;font-size: 40px;font-weight:900 ;">T</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav offset-lg-1" style="text-align:center; font-size: 20px; ">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" >
                                        <router-link :to="{ name: 'home' }" class="nav-link" style="margin-top: -7px;font-family: 'Times New Roman', Times, serif;">
                                            Home
                                        </router-link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active">
                                        <router-link :to="{ name: 'about' }" class="nav-link" style="margin-top: -7px;font-family: 'Times New Roman', Times, serif;">
                                            About
                                        </router-link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active">
                                        <router-link :to="{ name: 'contact' }" class="nav-link" style="margin-top: -7px;font-family: 'Times New Roman', Times, serif;">
                                            Contact
                                        </router-link>
                                    </a>
                                </li>
                            </ul>
                        
                            <ul class="navbar-nav col-lg-6 offset-lg-2 " style="float:right;"> 
                                <li class="nav-item" style="float:right;">
                                    <a class="nav-link active">
                                        <button class="btn btn-outline-success" style="padding: 10px;font-family: 'Times New Roman', Times, serif;">
                                            <i class="fas fa-phone" style="color: blue; "></i>
                                            0123456789
                                        </button>
                                    </a>
                                </li>
                                <li class="nav-item" style="float:right;">
                                    <a class="nav-link active">
                                        <button class="btn btn-outline-success">
                                            <router-link :to="{ name: 'Login' }"
                                            style="padding: 1px;font-family: 'Times New Roman', Times, serif;"
                                            >
                                                Login
                                            </router-link>
                                        </button>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <div class="sec-center">
                                        <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                                        <label class="for-dropdown" for="dropdown" style=" margin-top: 7%;">
                                            Quản lý Bookstore 
                                            <i class="uil uil-arrow-down"></i>
                                        </label>
                                        <div class="section-dropdown">
                                            <a class="a1" style="font-family: 'Times New Roman', Times, serif;" >
                                            
                                                <router-link :to="{ name: 'Admin' }">
                                                    Thông tin cá nhân
                                                </router-link>
                                            </a>
                                            <a class="a1" style="font-family: 'Times New Roman', Times, serif;">
                                            
                                                <router-link :to="{ name: 'contactbook' }">
                                                    Danh sách sản phẩm
                                                </router-link>
                                            </a> 
                                            <hr/>
                                            <a class="a1" style="font-family: 'Times New Roman', Times, serif;">
                                            
                                                <router-link :to="{ name: 'home' }">
                                                    Logout
                                                </router-link>
                                            </a>
                                        </div>
                                    </div>
                                </li> 
                            </ul>
                        </div> 
                </div>
            </nav>
        </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

/* *,
*::before,
*::after {
    box-sizing: border-box;
} */


.sec-center {
    position: relative;
    max-width: 100%;
    text-align: center;
    z-index: 200;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
    opacity: 0;
    pointer-events: none;
}

.dark-light:checked+label,
.dark-light:not(:checked)+label {
    position: fixed;
    top: 40px;
    right: 40px;
    z-index: 20000;
    display: block;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    cursor: pointer;
    transition: all 200ms linear;
    box-shadow: 0 0 25px rgba(255, 235, 167, .45);
}

.dark-light:checked+label {
    transform: rotate(360deg);
}

.dark-light:checked+label:after,
.dark-light:not(:checked)+label:after {
    position: absolute;
    content: '';
    top: 1px;
    left: 1px;
    overflow: hidden;
    z-index: 2;
    display: block;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background-color: #102770;
    background-image: url('https://assets.codepen.io/1462889/moon.svg');
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 200ms linear;
    opacity: 0;
}

/* .dark-light:checked+label:after {
    opacity: 1;
} */

.dark-light:checked+label:before,
.dark-light:not(:checked)+label:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    display: block;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    background-color: #48dbfb;
    background-image: url('https://assets.codepen.io/1462889/sun.svg');
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 200ms linear;
}

.dark-light:checked+label:before {
    background-color: #000;
}

.light-back {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
    overflow: hidden;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    height: 100%;
    width: 100%;
    transition: all 200ms linear;
    opacity: 0;
}

.dark-light:checked~.light-back {
    opacity: 1;
}

.dropdown:checked+label,
.dropdown:not(:checked)+label {
    position: relative;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 2;
    height: 45px;
    transition: all 200ms linear;
    border-radius: 4px;
    width: 220px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    text-align: center;
    border: none;
    background-color:#59b300;
    cursor: pointer;
    color: #102770;
    box-shadow: 0 12px 35px 0 rgba(255, 235, 167, .15);
}

.dark-light:checked~.sec-center .for-dropdown {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 12px 35px 0 rgba(16, 39, 112, .25);
}

.dropdown:checked+label:before,
.dropdown:not(:checked)+label:before {
    position: fixed;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    cursor: auto;
    pointer-events: none;
}

.dropdown:checked+label:before {
    pointer-events: auto;
}

.dropdown:not(:checked)+label .uil {
    font-size: 24px;
    margin-left: 10px;
    transition: transform 200ms linear;
}

.dropdown:checked+label .uil {
    transform: rotate(180deg);
    font-size: 24px;
    margin-left: 10px;
    transition: transform 200ms linear;
}

.section-dropdown {
    position: absolute;
    padding: 5px;
    background-color: rgb(208, 250, 189);
    top: 70px;
    left: 0;
    width: 100%;
    border-radius: 4px;
    display: block;
    box-shadow: 0 14px 35px 0 rgba(9, 9, 12, 0.4);
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);
    transition: all 200ms linear;
}

.dark-light:checked~.sec-center .section-dropdown {
    background-color: #fff;
    box-shadow: 0 14px 35px 0 rgba(9, 9, 12, 0.15);
}

.dropdown:checked~.section-dropdown {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

.section-dropdown:before {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    content: '';
    display: block;
    z-index: 1;
}

.section-dropdown:after {
    position: absolute;
    top: -7px;
    left: 30px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #111;
    content: '';
    display: block;
    z-index: 2;
    transition: all 200ms linear;
}

.dark-light:checked~.sec-center .section-dropdown:after {
    border-bottom: 8px solid #fff;
}

a {
    position: relative;
    color: #fff;
    transition: all 200ms linear;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 15px;
    border-radius: 2px;
    padding: 5px 0;
    padding-left: 20px;
    padding-right: 15px;
    margin: 2px 0;
    text-align: left;
    text-decoration: none;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    justify-content: space-between;
    -ms-flex-pack: distribute;
}

.dark-light:checked~.sec-center .section-dropdown a {
    color: #102770;
}

.a1:hover {
    color: #102770;
    background-color: #ffeba7;
}

.dark-light:checked~.sec-center .section-dropdown a:hover {
    color: #ffeba7;
    background-color: #102770;
}

a .uil {
    font-size: 22px;
}

.dropdown-sub:checked+label,
.dropdown-sub:not(:checked)+label {
    position: relative;
    color: #fff;
    transition: all 200ms linear;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 15px;
    border-radius: 2px;
    padding: 5px 0;
    padding-left: 20px;
    padding-right: 15px;
    text-align: left;
    text-decoration: none;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    justify-content: space-between;
    -ms-flex-pack: distribute;
    cursor: pointer;
}

.dropdown-sub:checked+label .uil,
.dropdown-sub:not(:checked)+label .uil {
    font-size: 22px;
}

.dropdown-sub:not(:checked)+label .uil {
    transition: transform 200ms linear;
}

.dropdown-sub:checked+label .uil {
    transform: rotate(135deg);
    transition: transform 200ms linear;
}

.dropdown-sub:checked+label:hover,
.dropdown-sub:not(:checked)+label:hover {
    color: #102770;
    background-color: #ffeba7;
}

.dark-light:checked~.sec-center .section-dropdown .for-dropdown-sub {
    color: #102770;
}

.dark-light:checked~.sec-center .section-dropdown .for-dropdown-sub:hover {
    color: #ffeba7;
    background-color: #102770;
}

.section-dropdown-sub {
    position: relative;
    display: block;
    width: 100%;
    pointer-events: none;
    opacity: 0;
    max-height: 0;
    padding-left: 10px;
    padding-right: 3px;
    overflow: hidden;
    transition: all 200ms linear;
}

.dropdown-sub:checked~.section-dropdown-sub {
    pointer-events: auto;
    opacity: 1;
    max-height: 999px;
}

.section-dropdown-sub a {
    font-size: 14px;
}

.section-dropdown-sub a .uil {
    font-size: 20px;
}

.logo {
    position: fixed;
    top: 50px;
    left: 40px;
    display: block;
    z-index: 11000000;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
    transition: all 250ms linear;
}

.logo:hover {
    background-color: transparent;
}

.logo img {
    height: 26px;
    width: auto;
    display: block;
    transition: all 200ms linear;
}

.dark-light:checked~.logo img {
    filter: brightness(10%);
}

@media screen and (max-width: 991px) {
    .logo {
        top: 30px;
        left: 20px;
    }

    .dark-light:checked+label,
    .dark-light:not(:checked)+label {
        top: 20px;
        right: 20px;
    }
}
</style>