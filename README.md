# WI-SchnorrJS
Copyright (C) 2016 - Christof Torres

License/usage:
=========================
This software is released under the terms of the GNU GPL v3 license, a copy of which should be included with this distribution.
This software is provided "AS IS", without any warranties of any kind,
either expressed or implied.

About
=========================
WI-SchnorrJS is a partially blind WI-Schnorr signature scheme implementation in JavaScript. The implementation is based on the partially blind WI-Schnorr signature scheme by Abe et al. [[1]](http://www.iacr.org/archive/crypto2000/18800272/18800272.pdf).

Installation instructions
=========================
There are some prerequisites before being able to install WI-SchnorrJS. You will have to have Node.js and the node package manager npm pre-installed on your system. Node.js is an open source Javascript runtime environment for easily building server-side and networking applications.

There are two ways to get Node.js and npm:

1. Download and install Node.js from [nodejs.org](https://nodejs.org/en/). Node.js includes npm.
2. Or, if you have a package manager like APT, install Node.js and npm via that. For example, in an Ubuntu or Debian terminal window, enter: ***sudo apt-get install nodejs nodejs-legacy npm***

**Important note for Ubuntu users:** Please  make sure that you have installed the latest version of Node.js and npm by running the following two commands:

	node -v
	npm -v

The Node.js version should be 4.x.x or higher and the npm version should be 3.x.x or higher. If this is not the case, then you can try to install manually the latest version of Node.js by running the following commands inside the console:

	sudo apt-get purge nodejs npm
	curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
	sudo apt-get install -y nodejs

After you have Node.js and npm installed, you need to install all the necessary dependencies. Just run the following command inside the console from the directory containing the _package.json_ file:

	npm install

Running instructions
====================
Just run the following command from the console in order to start the application:

	node main.js

References
=========================
[1] Abe, Masayuki, and Tatsuaki Okamoto. "Provably secure partially blind signatures." Annual International Cryptology Conference. Springer Berlin Heidelberg, 2000.