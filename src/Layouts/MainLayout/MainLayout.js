import React from 'react'

function MainLayout() {
    return (
        <div>
            <div class="layout_main">
               {/*  <!--content-menu--> */}
            <div class="feed">
                {/* <!-- tweetbox--> */}
                <div class="HOME">Home</div>
                <>
                <hr/>
                <div class="wrapper">
                    <div class="input-box">
                      <div class="tweet-area">
                        <img src="assets/tweet_box_logo.jpg" class="tweetbox_logo" alt=""/>
                        <textarea  placeholder="What's happening?"></textarea>
                        
                      </div>
                      <div class="privacy">
                        <img src="assets/world-globe-asia-view-svgrepo-com.svg" class="globe" alt=""/>
                        <div class="Everyone">Everyone can reply</div>
                      </div>
                    </div>
                    <div class="bottom">
                      <ul class="icons">
                        <li><img src="assets/capture-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/file-image-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/location-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/smile-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/profile-svgrepo-com.svg" class="logo" alt=""/></li>
                      </ul>
                      
                      <div>
                        <button class="button button1">Tweet</button>
                      </div>
                    </div>
                </div>
                </>
                
            </div>

           {/*  <!-- Tweets main --> */}
            <br/>
                {/* <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/profile.jpeg" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Shekhar Adwani
                            </div>
                            <div class="tweet_author_id">
                                @shekharadwani
                            </div>
                            <div class="tweet_time">
                                38min
                            </div>
                        </div>
                        <div class="tweet_content">
                            Thank You for the great opportunity @Sushma
                            <img class="tweet_img" src="assets/thank-you.jpg" alt=""/><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            
                            <i id="one" class="fas fa-heart"></i>
                            <i class="fas fa-comment"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                       
                        </div>
                    </div>
                </div>
               {/*  <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/profile2.webp" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Ishwa Jain
                            </div>
                            <div class="tweet_author_id">
                                @ishwajain
                            </div>
                            <div class="tweet_time">
                                19h
                            </div>
                        </div>
                        <div class="tweet_content">
                            <div class="main_content">COVID-19 cases linked to the Tokyo Games approach 300<br/></div>
                            There have been at least 299 cases of COVID-19 linked to the Tokyo Games, 
                            according to IOC data. In the latest batch, there are 18 new cases linked to the Games,
                            including an artistic swimmer from Greece. The country's Olympic Committee has pulled 
                            the team out of the competition. It comes as cases in Tokyo are rising, with 
                            only the most serious patients being taken to hospital.
                            <img class="tweet_img" src="assets/corona.jpeg" alt=""/><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            
                            <i id="one" class="fas fa-heart"></i>
                            <i class="fas fa-comment"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                       
                        </div>
                    </div>
                </div>

                {/* <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/profile.jpeg" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Shekhar Adwani
                            </div>
                            <div class="tweet_author_id">
                                @shekharadwani
                            </div>
                            <div class="tweet_time">
                                21hr
                            </div>
                        </div>
                        <div class="tweet_content">
                            Here are some of the javascript course link that may be helpful for you .
                            <a href="https://www.w3schools.com/js/">https://www.w3schools.com/js/</a><br/>
                            <a href="https://www.coursera.org/learn/javascript">https://www.coursera.org/learn/javascript</a><br/>
                            <a href="https://www.udemy.com/course/the-complete-javascript-course/">
                                https://www.udemy.com/course/the-complete-javascript-course/</a><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart"></i>
                            <i class="fas fa-comment"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/user3.jpg" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Akash Kansal
                            </div>
                            <div class="tweet_author_id">
                                @akashkansal
                            </div>
                            <div class="tweet_time">
                                Yesterday
                            </div>
                        </div>
                        <div class="tweet_content">
                            <div class="main_content">A black hole warped space-time so much that 
                            astronomers saw flashes of light from its far side</div>
                            Astronomers have seen light from behind a black hole for the first time.
                             The black hole warped light from X-ray explosions on its far side, bending 
                             the light around toward Eat.<br/>
                             It further confirms Albert Einstein's theory that massive objects 
                             like black holes warp space-time.<br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart"></i>
                            <i class="fas fa-comment"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Tweet--> */}
                <div class="tweet">
                    <img src="assets/user4.png" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Sanskriti Kapoor
                            </div>
                            <div class="tweet_author_id">
                                @sanskritikapoor
                            </div>
                            <div class="tweet_time">
                               Yesterday
                            </div>
                        </div>
                        <div class="tweet_content">
                            Congratulations <i class="fas fa-glass-cheers"></i><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart"></i>
                            <i class="fas fa-comment"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Tweet--> */}
                <div class="tweet">
                    <img src="assets/profile2.webp" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Akansha Singh
                            </div>
                            <div class="tweet_author_id">
                                @akanshasingh
                            </div>
                            <div class="tweet_time">
                                2 day
                            </div>
                        </div>
                        <div class="tweet_content">
                            Excited for the Olympics<br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart"></i>
                            <i class="fas fa-comment"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default MainLayout
