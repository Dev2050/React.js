import React, { Component } from 'react';
import {
    Link
}from 'react-router-dom';

//My header class for a web project 
class Headers extends Component {
  render() {
    return (
        <div className="logo_head_container">
            <nav>
            <div class="fadeInUp wow"> <h3 className="logo">God and The Lord Jesus Christ</h3></div>
                <div id="menu">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item"><Link to="/">Home</Link></li>
                            <li class="nav-item"><Link to="/inform">Inform</Link></li>
                            <li class="nav-item"><Link to="/pages">Pages</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}
export default Headers;
