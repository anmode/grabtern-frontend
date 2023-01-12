import React from 'react'

function register() {
    return (
            <main class="login-body">
            <video autoPlay loop muted style={{  position: "fixed", right: 0, bottom: 0, minWidth: "100%", minHeight: "100%", }}>
                <source src='/assets/img/login-bg.mp4' type='video/mp4' />
            </video>

                <form class="form-default" action="login-bg.mp4" method="POST">

                    <div class="login-form">
                        <div class="logo-login">
                            <a href="index.html"><img src="/assets/img/logo/loder.png" alt="" /></a>
                        </div>
                        <h2>Registration Here</h2>

                        <div class="form-input">
                            <label for="name">Full name</label>
                            <input type="text" name="name" placeholder="Full name" />
                        </div>
                        <div class="form-input">
                            <label for="name">Email Address</label>
                            <input type="email" name="email" placeholder="Email Address" />
                        </div>
                        <div class="form-input">
                            <label for="name">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div class="form-input">
                            <label for="name">Confirm Password</label>
                            <input type="password" name="password" placeholder="Confirm Password" />
                        </div>
                        <div class="form-input pt-30">
                            <input type="submit" name="submit" value="Registration" />
                        </div>
                        <a href="login.html" class="registration">login</a>
                    </div>
                </form>
            </main>
    )
}

export default register;