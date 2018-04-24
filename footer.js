import React,{Component} from 'react';

//My footer class code snippet for a web project 
class Footer extends Component{
  
    render(){
        return(
            <footer class="site-footer section-spacing"> 
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="social">
                                <li class="fadeInUp wow"><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li class="fadeInUp wow"><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li class="fadeInUp wow"><a href="https://plus.google.com/" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                            <small class="fadeInUp wow"><h5>© 2018 The Lord God.</h5></small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
