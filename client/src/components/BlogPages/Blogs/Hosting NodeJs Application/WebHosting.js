import React from "react";
import "./WebHosting.scss";

import avatar from "../avatar.png";
import title from "./utils/title.jpeg";
import first from "./utils/first.jpg";
import second from "./utils/second.jpg";
import third from "./utils/third.jpg";
import fourth from "./utils/fourth.jpg";
import fifth from "./utils/fifth.jpg";
import sixth from "./utils/sixth.jpg";
import eigth from "./utils/eigth.jpg";
import ninth from "./utils/ninth.jpg";
import tenth from "./utils/tenth.jpg";
import eleventh from "./utils/eleventh.jpg";
import twelveth from "./utils/twelveth.jpg";

const WebHosting = (props) => {
    function runhere(e) {
        const copyText = e.target.parentElement.parentElement;
        navigator.clipboard.writeText(copyText.innerText);
        window.alert("code copied successfully!!");
        return;
    }
    return (
        <div className="main-blogpage-blog-container">
            <div className="contents">
                <div className="contents-data">

                    <div className="content-text">
                        TABLE OF CONTENTS
                    </div>
                    <ul>
                        <li><a href="#Introduction">Getting Started</a></li>
                        <li><a href="#basic-steps">Basic Steps</a></li>
                        <li><a href="#pre-requirements">Pre Requirements</a></li>
                        <li><a href="#set-aws">Setting Up Aws Machine</a></li>
                        <li><a href="#set-domain">Setting Up Domain Name</a></li>
                        <li><a href="#final-hosting">Hosting Your Website</a></li>
                    </ul>
                </div>
            </div>
            <div className="this-blog-content">
                <div className="blog-header">

                    <div className="this-blog-title">
                        {props.data.title}
                    </div>
                    <div className="this-blog-detail-text">
                        This blog explores the process of hosting web applications using Node.js, providing step-by-step guidance on deploying, configuring, and managing your application on various hosting platforms and servers.
                    </div>
                    <img className="this-blog-thumbnail" src={title} alt="" />
                    <div className="this-blog-details">
                        <div className="this-owner-logo">
                            <img loading="lazy" src={avatar} alt=""></img>
                            <div className="this-owner-name">{props.data.owner}</div>
                        </div>
                        <div className="this-time-content">
                            <i className="fa fa-clock-o"></i>
                            <div className="this-blog-time">{props.data.date}</div>
                        </div>
                    </div>
                </div>

                <div className="main-body">
                    <div id="Introduction">
                        Setting up your website on your own domain can be a daunting task if you lack the proper knowledge. But fear not! In this blog, we will guide you through the entire process. First, acquire a domain from any online domain provider. We will then utilize AWS Machine and Apache server to host your web app. Forget complicated search results; our comprehensive guide will walk you through the setup, ensuring a seamless website hosting experience. Join us till the end and conquer the world of hosting your own web application!
                    </div>
                    <div className="sub-chapters" id="basic-steps">
                        <div className="basic-steps-title">
                            <h3>
                                To host your website on your own AWS server and domain, you can follow the steps below:
                            </h3>

                        </div>
                        <div className="all-basic-steps">
                            <h4>Set up an EC2 instance on AWS:</h4>
                            <h5>
                                Launch an EC2 instance on AWS with the operating system of your choice (Ubuntu, Windows, etc.)
                                Ensure that the instance has the necessary resources (CPU, memory, storage, etc.) to run your Node.js application.
                                Connect to your EC2 instance via SSH and install Node.js and NPM on it.
                                Install Express using NPM.
                            </h5>

                            <h4>
                                Configure your web server:
                            </h4>
                            <h5>
                                Set up a reverse proxy server like Nginx or Apache to handle requests to your website.
                                Configure the reverse proxy to forward requests to your Node.js application running on a specific port.
                            </h5>

                            <h4>
                                Configure your DNS settings:
                            </h4>
                            <h5>
                                Log in to your domain registrar or DNS provider and configure the DNS settings for your domain to point to the IP address of your AWS EC2 instance.
                            </h5>

                            <h4>
                                Deploy your Node.js application:
                            </h4>
                            <h5>
                                Deploy your Node.js application to your AWS EC2 instance.
                                Start your Node.js application and ensure that it is running on the specified port.
                            </h5>

                            <h4>
                                Test your website:
                            </h4>
                            <h5>
                                Navigate to your domain in a web browser to verify that your website is up and running.
                                That's it! With these steps, you should be able to host your website on your own AWS server and domain.
                            </h5>
                        </div>
                        <div className="basic-steps-conc">
                            <h4>
                                Now i am sure most of you guys can't just understand all of this at first as you haven't done it before or forgot how to do it that's why you are here!
                                So lemme help you guys to explain it in details.

                                First of all i will tell how to setup everything and then will give required code blocks to make your application working!
                                if you already have the required setup you can skip this part.
                            </h4>
                        </div>
                    </div>
                    <div className="sub-chapters" id="pre-requirements">
                        <div className="chap-title">
                            <h2>Pre Requirements</h2>
                        </div>
                        <div className="title-desc">
                            We will be using an AWS server , Apache and a Domain Name , I gonna use these services for this blog you guys can use other's also, depends on you!
                        </div>
                    </div>
                    <div className="sub-chapters" id="set-aws">
                        <div className="chap-title">
                            <h2>Setting Up Aws Machine</h2>
                        </div>
                        <div className="title-desc">
                            For creating account on Amazon AWS go <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">here</a> and create your account for free , you would have to pay a little fee for verifying your account but it's very less and other things are litterly free.
                        </div>
                        <div className="set-up-details">
                            <h4>
                                After creating your account login to your account and go to home , it would look like this :
                            </h4>
                            <img src={first} alt="" />
                            <h4>
                                After logging in search for EC2 in the search bar and click on first EC2 option that come up like this :

                            </h4>
                            <img src={second} alt="" />
                            <h4>
                                After clicking on EC2 it will open your EC2 dashboard , i have already one instance running but you will have 0 if you haven't created any instance before.

                            </h4>
                            <img src={third} alt="" />
                            <h4>
                                Now click on the launch instance option in the above image and it will show you all the details you have to fill for creating your instance , fill out according to your need!!
                            </h4>
                            <img src={fourth} alt="" />
                            <h4>
                                I would suggest go with these :
                            </h4>
                            <div className="my-suggest">
                                <h5><strong>Name</strong> : My Server</h5>
                                <h5><strong>Machine</strong> : Ubuntu ( select only free tier eligible )</h5>
                                <h5><strong>key pair</strong> : My Server</h5>
                                <h5><strong>Name</strong> : for key pair create new and name it accordingly and keep it secret and safe.</h5>
                                <h5><strong>key pair type</strong> : RSA</h5>
                                <h5><strong>Private key file format</strong> : .pem</h5>
                                <h5><strong>Configure storage</strong> : select these according to your needs</h5>

                                <h5>
                                    <strong>keep other's default and launch instance , it will take some time and your instance will start working!</strong>
                                </h5>

                            </div>
                            <h4>
                                Now go to your instances and it will show your instance like this :

                            </h4>
                            <img src={fifth} alt="" />
                            <h4>
                                Now open your instance by clicking on instance id, save your instance public ip address and then click on connect button :

                            </h4>
                            <img src={sixth} alt="" />
                            <h4>
                                It will open a connect to instance window and will show you all the options how you can connect with your instance , we will use ssh method so go to <strong>SSH client</strong> tab and copy the Example string it should look like this : <mark> ' ssh -i "private-key-filename.pem" ubuntu@ec2-13-235-16-240.ap-south-1.compute.amazonaws.com ' </mark> see below image for reference :
                            </h4>
                            <img src={eigth} alt="" />
                            <div className="title-desc">
                                That's all from this , you guys have to keep three things safe from above
                                first that private key file , second your instance public ip address and third that Example string.

                            </div>
                        </div>
                    </div>
                    <div className="sub-chapters" id="set-domain">
                        <div className="chap-title">
                            <h2>Setting Up Your Own Domain</h2>
                        </div>
                        <div className="title-desc">
                            You guys can buy your domain name from any provider i have purchased mine from GoDaddy you guys can also other websites also there are many.
                        </div>
                        <div className="set-up-details">
                            <h4>
                                We will be using Cloudflare for managing our domain DNS Settings so after getting your domain go <a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer">here</a> and login or create account if you don't have one, your dashboard should look like this :

                            </h4>
                            <img src={ninth} alt="" />
                            <h4>
                                Click on <strong>ADD SITE</strong> button from above image and enter root domain of your website and select free plan, it will take couple minutes and would show something like this

                            </h4>
                            <img src={tenth} alt="" />
                            <h4>
                                click on add record and add required A types like <strong>@</strong> and <strong>www</strong> and use that <strong>public ip</strong> address we got from AWS Server to input in the <strong>IPv4 address</strong> and save.

                            </h4>
                            <img src={eleventh} alt="" />
                            <div className="title-desc">
                                Okay that's all for this part.
                            </div>
                        </div>
                    </div>
                    <div className="sub-chapters" id="final-hosting">
                        <div className="chap-title">
                            <h2>Final Hosting</h2>
                        </div>
                        <div className="title-desc">
                            This is the final and most important part of this blog for this you would gonna need an access to a SSH Terminal or you can use your Laptop or Pc terminal also.

                        </div>
                        <div className="set-up-details">
                            <h2>
                                Follow these simple steps :
                            </h2>

                            <h4><strong>Step 1:</strong>
                                Open your terminal in the folder you saved your private key file and run the example string you copied from AWS Server.
                            </h4>
                            <img src={twelveth} alt="" />
                            <h4><strong>Step 2 : </strong>
                                Clone your github project using
                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                git clone your-repo-link
                            </code>
                            <h4><strong>Step 3 : </strong>
                                Go to your project folder using
                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                cd your-project-folder
                            </code>
                            <h4><strong>Step 4 : </strong>
                                Now if you have used any node packages you would need to install them using npm , so first make sure your npm version is compatible with the required NodeJs version and then use this command to install NodeJs packages

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                npm install
                            </code>
                            <h4><strong>Step 5 : </strong>
                                Now use this command to start a new tmux session so that we can run our main js file there

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                tmux new -s myapp
                            </code>
                            <h4><strong>Step 6 : </strong>
                                Now you are in tmux window , now use this command to run your node app:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                node app.js
                            </code>
                            <h4>
                                It will start your app on the given port so make sure you remember that port as we would gonna need that.

                            </h4>
                            <h4><strong>Step 7 : </strong>
                                Now we guys would need an Apache server so use this command:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo apt-get install apache2
                            </code>
                            <h4><strong>Step 8 : </strong>
                                You can create virtual hosts to serve multiple websites on the same server. You will need to create a configuration file for each virtual host in the <mark>/etc/apache2/sites-available/</mark> directory. For example, if you want to create a virtual host for example.com, you can create a file called <mark>/etc/apache2/sites-available/example.com.conf</mark> with the following contents:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                cd /etc/apache2/sites-available/
                            </code>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo nano example.com.conf
                            </code>
                            <h4><strong>Step 8-1 : </strong>
                                Now enter the below content in your example.com.conf file
                                <br />
                            </h4>
                            <h4>
                                <strong>if you guys have Node app running using some local host port use this:</strong>

                                <br />
                            </h4>
                            <code >
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                <pre>
                                    {`<VirtualHost *:80>
  ServerName example.com
  ProxyPass / http://localhost:5000/
  ProxyPassReverse / http://localhost:5000/
  ErrorLog \${APACHE_LOG_DIR}/error.log
  CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>`}
                                </pre>
                            </code>
                            <h4>
                                <strong>
                                    if you guys have just simple html and js files use this instead:
                                    <br />

                                </strong>
                            </h4>
                            <code >
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                <pre>
                                    {`<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/example.com
    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>`}
                                </pre>
                            </code>
                            <h4>
                                Now save changes and exit nano editor using <strong>CTRL + 'O'</strong> to save and Enter after that exit using <strong>CTRL + 'X'</strong>
                                To exit nano without saving use <strong>CTRL + 'X'</strong>
                                After doing this you guys can remove that <mark>000-default.conf</mark> file (present in this same folder) it depend on you guys.
                            </h4>
                            <h4><strong>Step 9 : </strong>
                                You guys need to follow this step only if you have normal app using just html and css file and not using some port

                                <br />
                            </h4>
                            <h4><strong>Step 9-1 : </strong>
                                Create folder so that you can save your app code there

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo mkdir /var/www/example.com
                            </code>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                cd /var/www/example.com
                            </code>
                            <h4><strong>Step 9-2 : </strong>
                                Now clone your github repo here instead:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                git clone your-repo-link
                            </code>
                            <h4>
                                <strong>
                                    make sure index file is present in example.com folder directly

                                </strong>
                            </h4>
                            <h4><strong>Step 10 : </strong>
                                You will need to enable the virtual host by creating a symbolic link from the configuration file in the <mark>/etc/apache2/sites-available/</mark> directory to the <mark>/etc/apache2/sites-enabled/</mark> directory. You can do this by running the following command:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo a2ensite example.com.conf
                            </code>
                            <h4><strong>Step 11 : </strong>
                                You will need to allow HTTP traffic through the firewall. You can do this by running the following command:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo ufw allow http
                            </code>
                            <h4><strong>Step 11-1 : </strong>
                                Check if the required module for ProxyPass is enabled. You can do this by running the following command

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo a2enmod proxy
                            </code>
                            <h4><strong>Step 11-2 : </strong>
                                Also enable this module:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo a2enmod proxy_http
                            </code>
                            <h4><strong>Step 12 : </strong>
                                You will need to restart Apache for the changes to take effect. You can do this by running the following command:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                sudo systemctl restart apache2
                            </code>
                            <h4><strong>Step 13 : </strong>
                                Check the status of your server using this command:

                                <br />
                            </h4>
                            <code>
                                <div className="clipboard"><i className="fa-regular fa-clipboard fa-shake" style={{ "fontSize": "20px" }} onClick={(e) => { runhere(e) }}></i></div>
                                systemctl status apache2.service
                            </code>
                        </div>

                    </div>
                    <div id="final-conclusion" className="sub-chapters">
                        <div className="chap-title">
                            <h2>
                                Conclusion
                            </h2>
                        </div>
                        <div className="title-desc">
                            That's all for this blog, thanks for enjoying my content!!
                        </div>
                        <div className="set-up-details">
                            <h4>
                                In conclusion, setting up your own website on your domain can be a daunting task if you're unfamiliar with the process. But fear not, this blog has provided a comprehensive guide to help you through each step.

                                Firstly, you need to acquire a domain from any online domain provider. Then, using AWS Machine and Apache server, you can host your web app. The blog explains how to set up an EC2 instance on AWS, configure DNS settings using Cloudflare, and install and configure Apache server.

                                The final hosting process involves connecting to your AWS instance via SSH, cloning your project, installing Node.js packages, starting a tmux session, and running your Node.js app. If you're using Apache server, virtual host configuration is provided for both Node.js apps and simple HTML and JS files.

                                To ensure a successful setup, the blog includes detailed steps, screenshots, and code blocks. It also covers additional information, such as how to install the latest Node.js version on Ubuntu.

                                By following this blog, even if you're new to hosting websites or need a refresher, you'll be able to set up your own website on your domain with confidence.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebHosting;