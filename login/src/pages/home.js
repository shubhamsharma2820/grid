
import React from 'react';

class Home extends React.Component{
    render(){
        return(
        <div>
            <body class='snippet-body'/>
<section class="body">
    <div class="container">
        <div class="login-box" style="Position:relative;">
            
            <div class="row">
                <div class="col-sm-6 hide-on-mobile" style="Position:relative;z-index: 9;">
                    <div id="demo" class="carousel slide" data-ride="carousel">
                        
                        <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                        </ul>
                        
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="slider-feature-card">
                                    <img src="assets/img/YMn8Xo1.png" alt=""/>
                                    <h3 class="slider-title">Title Here</h3>
                                    <p class="slider-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odio!</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="slider-feature-card">
                                    <img src="assets/img/Yi5KXKM.png" alt=""/>
                                    <h3 class="slider-title">Title Here</h3>
                                    <p class="slider-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, debitis?</p>
                                </div>
                            </div>
                        </div>
                        
                        <a class="carousel-control-prev" href="#demo"  data-bs-target="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo"  data-bs-target="#demo" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6" style="overflow: hidden;position: relative;">
                    <div class="logo">
                        <img src="assets/img/logo.png" width="180" />
                    </div>
                    <br/>
                    <h3 class="header-title">LOGIN</h3>

                
                    <form class="login-form login-form-1 login-form-active">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email or UserName"/>
                        </div>
                        <div class="form-group">
                            <input type="Password" class="form-control" placeholder="Password"/>
                            <a href="#!" class="forgot-password">Forgot Password?</a>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-block">LOGIN</button>
                        </div>
                        <div class="w-100 form-group">
                            <button id="login-google-button" class="btn btn-block signup-with-btn">
                                <svg class="css-no0zdi eu4oa1w0" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.20455C17.64 8.56637 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"></path></svg><span class="">Login with Google</span></button>

                                <button id="login-linkedin-button" class="btn btn-block signup-with-btn">
                                <svg width="25px" height="25px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Icon/Social/linkedin-color" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="#007BB5"></path>
    </g>
</svg><span class="">Login with Linkedin</span></button>
                        </div>

                        <div class="form-group">
                            <div class="text-center">New Member? <a href="signup.html" id="newmember">Sign up Now</a></div>
                        </div>

                        <div class="w-100">
                             <ul class="social-icon d-flex">
                                <li>
                                    <a href="#" target="_blank" style="background:#4267B2;"><i class="bi bi-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" style="background:#00acee;"><i class="bi bi-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="m-0" style="background:#db4a39;"><i class="bi bi-google"></i></a>
                                </li>
                            </ul>
                        </div>
                    </form>

                    

                </div>
                
            </div>
        </div>
    </div>
</section>
        </div>);
    }
}
export default Home;