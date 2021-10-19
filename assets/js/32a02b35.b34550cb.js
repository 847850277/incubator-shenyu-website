"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3946],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(t),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5465:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],i={title:"Release Guide",sidebar_position:6,description:"Apache ShenYu Release Guide",cover:"/img/architecture/shenyu-framework.png"},l=void 0,p={unversionedId:"release-guide",id:"release-guide",isDocsHomePage:!1,title:"Release Guide",description:"Apache ShenYu Release Guide",source:"@site/community/5-release-guide.md",sourceDirName:".",slug:"/release-guide",permalink:"/community/release-guide",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/5-release-guide.md",version:"current",lastUpdatedBy:"fengzhenbing",lastUpdatedAt:1634609849,formattedLastUpdatedAt:"10/19/2021",sidebarPosition:6,frontMatter:{title:"Release Guide",sidebar_position:6,description:"Apache ShenYu Release Guide",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Committer",permalink:"/community/committer"},next:{title:"How to vote Committer",permalink:"/community/vote-committer"}},u=[{value:"GPG Settings",id:"gpg-settings",children:[]},{value:"Apache Maven Central Repository Release",id:"apache-maven-central-repository-release",children:[]},{value:"Apache SVN Repository Release",id:"apache-svn-repository-release",children:[]},{value:"Check Release",id:"check-release",children:[]},{value:"Call for a Vote",id:"call-for-a-vote",children:[]},{value:"Finish the Release",id:"finish-the-release",children:[]}],c={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"gpg-settings"},"GPG Settings"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. Install GPG")),(0,s.kt)("p",null,"Download installation package on ",(0,s.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"official GnuPG website"),".\nThe command of GnuPG 1.x version can differ a little from that of 2.x version.\nThe following instructions take ",(0,s.kt)("inlineCode",{parentName:"p"},"GnuPG-2.1.23")," version for example.\nAfter the installation, execute the following command to check the version number."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --version\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. Create Key")),(0,s.kt)("p",null,"After the installation, execute the following command to create key."),(0,s.kt)("p",null,"This command indicates ",(0,s.kt)("inlineCode",{parentName:"p"},"GnuPG-2.x")," can be used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --full-gen-key\n")),(0,s.kt)("p",null,"This command indicates ",(0,s.kt)("inlineCode",{parentName:"p"},"GnuPG-1.x")," can be used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --gen-key\n")),(0,s.kt)("p",null,"Finish the key creation according to instructions:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To be noticed: Please use Apache mail for key creation.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'gpg (GnuPG) 2.0.12; Copyright (C) 2009 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n  (1) RSA and RSA (default)\n  (2) DSA and Elgamal\n  (3) DSA (sign only)\n  (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n        0 = key does not expire\n     <n>  = key expires in n days\n     <n>w = key expires in n weeks\n     <n>m = key expires in n months\n     <n>y = key expires in n years\nKey is valid for? (0) \nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: ${Input username}\nEmail address: ${Input email}\nComment: ${Input comment}\nYou selected this USER-ID:\n   "${Inputed username} (${Inputed comment}) <${Inputed email}>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. # Input passwords\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. Check Generated Key")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --list-keys\n")),(0,s.kt)("p",null,"Execution Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pub   4096R/700E6065 2019-03-20\nuid                  ${Username} (${Comment}) <{Email}>\nsub   4096R/0B7EF5B2 2019-03-20\n")),(0,s.kt)("p",null,"700E6065 is public key ID."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. Upload the Public Key to Key Server")),(0,s.kt)("p",null,"The command is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --keyserver hkp://pool.sks-keyservers.net --send-key 700E6065\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pool.sks-keyservers.net")," is randomly chosen from ",(0,s.kt)("a",{parentName:"p",href:"https://sks-keyservers.net/status/"},"public key server"),".\nEach server will automatically synchronize with one another, so it would be okay to choose any one."),(0,s.kt)("h2",{id:"apache-maven-central-repository-release"},"Apache Maven Central Repository Release"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. Set settings.xml")),(0,s.kt)("p",null,"Add the following template to ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.m2/settings.xml"),", all the passwords need to be filled in after encryption.\nFor encryption settings, please see ",(0,s.kt)("a",{parentName:"p",href:"http://maven.apache.org/guides/mini/guide-encryption.html"},"here"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<settings>\n    <servers>\n      <server>\n          <id>apache.snapshots.https</id>\n          <username> \x3c!-- APACHE LDAP username --\x3e </username>\n          <password> \x3c!-- APACHE LDAP encrypted password --\x3e </password>\n      </server>\n      <server>\n          <id>apache.releases.https</id>\n          <username> \x3c!-- APACHE LDAP username --\x3e </username>\n          <password> \x3c!-- APACHE LDAP encrypted password --\x3e </password>\n      </server>\n    </servers>\n</settings>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. Update Release Notes")),(0,s.kt)("p",null,"Update the following file in master branch, and submit a PR to master branch:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. Create Release Branch")),(0,s.kt)("p",null,"Download and install ",(0,s.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git")),(0,s.kt)("p",null,"Suppose ShenYu source codes downloaded from github is under ",(0,s.kt)("inlineCode",{parentName:"p"},"~/incubator-shenyu/")," directory and the version to be released is ",(0,s.kt)("inlineCode",{parentName:"p"},"${RELEASE.VERSION}"),".\nCreate ",(0,s.kt)("inlineCode",{parentName:"p"},"${RELEASE.VERSION}-release")," branch, where all the following operations are performed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# ${name} is the properly branch, e.g. master, main\ngit clone --branch ${name} https://github.com/apache/incubator-shenyu.git ~/incubator-shenyu\ncd ~/incubator-shenyu/\ngit pull\ngit checkout -b ${RELEASE.VERSION}-release\ngit push origin ${RELEASE.VERSION}-release\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. Pre-Release Check")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:prepare -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -DdryRun=true -Dusername=${Github username}\n')),(0,s.kt)("p",null,"-Prelease: choose release profile, which will pack all the source codes, jar files and executable binary packages."),(0,s.kt)("p",null,"-DautoVersionSubmodules=true: it can make the version number is inputted only once and not for each sub-module."),(0,s.kt)("p",null,"-DdryRun=true: rehearsal, which means not to generate or submit new version number and new tag."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"5. Prepare for the Release")),(0,s.kt)("p",null,"First, clean local pre-release check information."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mvn release:clean\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:prepare -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -DpushChanges=false -Dusername=${Github username}\n')),(0,s.kt)("p",null,"It is basically the same as the previous rehearsal command, but deleting -DdryRun=true parameter."),(0,s.kt)("p",null,"-DpushChanges=false: do not submit the edited version number and tag to Github automatically."),(0,s.kt)("p",null,"After making sure there is no mistake in local files, submit them to GitHub."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin ${RELEASE.VERSION}-release\ngit push origin --tags\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"6. Deploy the Release")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:perform -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -Dusername=${Github username}\n')),(0,s.kt)("p",null,"After that command is executed, the version to be released will be uploaded to Apache staging repository automatically.\nVisit ",(0,s.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories")," and use Apache LDAP account to log in; then you can see the uploaded version, the content of ",(0,s.kt)("inlineCode",{parentName:"p"},"Repository")," column is the ${STAGING.REPOSITORY}.\nClick ",(0,s.kt)("inlineCode",{parentName:"p"},"Close")," to tell Nexus that the construction is finished, because only in this way, this version can be usable.\nIf there is any problem in gpg signature, ",(0,s.kt)("inlineCode",{parentName:"p"},"Close")," will fail, but you can see the failure information through ",(0,s.kt)("inlineCode",{parentName:"p"},"Activity"),"."),(0,s.kt)("h2",{id:"apache-svn-repository-release"},"Apache SVN Repository Release"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. Checkout ShenYu Release Directory")),(0,s.kt)("p",null,"Download and install ",(0,s.kt)("a",{parentName:"p",href:"https://tortoisesvn.net/downloads.html"},"SVN")),(0,s.kt)("p",null,"If there is no local work directory, create one at first."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/shenyu_svn/dev/\ncd ~/shenyu_svn/dev/\n")),(0,s.kt)("p",null,"After the creation, checkout ShenYu release directory from Apache SVN."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"svn --username=${APACHE LDAP \u7528\u6237\u540d} co https://dist.apache.org/repos/dist/dev/incubator/shenyu\ncd ~/shenyu_svn/dev/shenyu\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. Add gpg Public Key")),(0,s.kt)("p",null,"Only the account in its first deployment needs to add that.\nIt is alright for ",(0,s.kt)("inlineCode",{parentName:"p"},"KEYS")," to only include the public key of the deployed account."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg -a --export ${GPG username} >> KEYS\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. Add the Release Content to SVN Directory")),(0,s.kt)("p",null,"Create folder by version number."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncd ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"Add source code packages, binary packages and executable binary packages to SVN working directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cp -f ~/incubator-shenyu/shenyu-dist/shenyu-src-dist/target/*.zip ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-src-dist/target/*.zip.asc ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-bootstrap-dist/target/*.tar.gz ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-bootstrap-dist/target/*.tar.gz.asc ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-admin-dist/target/*.tar.gz ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-admin-dist/target/*.tar.gz.asc ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. Generate sign files")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -a 512 apache-shenyu-incubating-${RELEASE.VERSION}-src.zip > apache-shenyu-incubating-${RELEASE.VERSION}-src.zip.sha512\nshasum -b -a 512 apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz > apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz.sha512\nshasum -b -a 512 apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz > apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz.sha512\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"5. Commit to Apache SVN")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~/shenyu_svn/dev/shenyu\nsvn add ${RELEASE.VERSION}/\nsvn --username=${APACHE LDAP \u7528\u6237\u540d} commit -m "release ${RELEASE.VERSION}"\n')),(0,s.kt)("h2",{id:"check-release"},"Check Release"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check sha512 hash")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -c apache-shenyu-incubating-${RELEASE.VERSION}-src.zip.sha512\nshasum -c apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz.sha512\nshasum -c apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz.sha512\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check gpg Signature")),(0,s.kt)("p",null,"First, import releaser's public key. Import KEYS from SVN repository to local. (The releaser does not need to import again; the checking assistant needs to import it, with the user name filled as the releaser's. )"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS >> KEYS\ngpg --import KEYS\ngpg --edit-key \"${GPG username of releaser}\"\n  > trust\n\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5\n\n  > save\n")),(0,s.kt)("p",null,"Then, check the gpg signature."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify apache-shenyu-incubating-${RELEASE.VERSION}-src.zip.asc apache-shenyu-incubating-${RELEASE.VERSION}-src.zip\ngpg --verify apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz.asc apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz\ngpg --verify apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz.asc apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check Released Files")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Compare release source with github tag")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl -Lo tag-${RELEASE.VERSION}.zip https://github.com/apache/incubator-shenyu/archive/v${RELEASE.VERSION}.zip\nunzip tag-${RELEASE.VERSION}.zip\nunzip apache-shenyu-incubating-${RELEASE.VERSION}-src.zip\ndiff -r -x "shenyu-dashboard" -x "shenyu-examples" -x "shenyu-integrated-test" -x "static" apache-shenyu-incubating-${RELEASE.VERSION}-src incubator-shenyu-${RELEASE.VERSION}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check source package")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Check whether source tarball is oversized for including nonessential files"),(0,s.kt)("li",{parentName:"ul"},"The release files have the word ",(0,s.kt)("inlineCode",{parentName:"li"},"incubating")," in their names"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE")," files exist"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," file exists"),(0,s.kt)("li",{parentName:"ul"},"Correct year in ",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE")," file"),(0,s.kt)("li",{parentName:"ul"},"There is only text files but no binary files"),(0,s.kt)("li",{parentName:"ul"},"All source files have ASF headers"),(0,s.kt)("li",{parentName:"ul"},"Codes can be compiled and pass the unit tests (./mvnw install) (compatible with JAVA 8 for now)"),(0,s.kt)("li",{parentName:"ul"},"Check if there is any extra files or folders, empty folders for example")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check binary packages")),(0,s.kt)("p",null,"Decompress\n",(0,s.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz"),"\uff0c\n",(0,s.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz"),"\nto check the following items:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The release files have the word ",(0,s.kt)("inlineCode",{parentName:"li"},"incubating")," in their name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE")," files exist"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," file exists"),(0,s.kt)("li",{parentName:"ul"},"Correct year in ",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE")," file"),(0,s.kt)("li",{parentName:"ul"},"All text files have ASF headers"),(0,s.kt)("li",{parentName:"ul"},"Check the third party dependency license:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The software has a compatible license"),(0,s.kt)("li",{parentName:"ul"},"All software licenses mentioned in ",(0,s.kt)("inlineCode",{parentName:"li"},"LICENSE")),(0,s.kt)("li",{parentName:"ul"},"All the third party dependency licenses are under ",(0,s.kt)("inlineCode",{parentName:"li"},"licenses")," folder"),(0,s.kt)("li",{parentName:"ul"},"If it depends on Apache license and has a ",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE")," file, that ",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE")," file need to be added to ",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE")," file of the release")))),(0,s.kt)("h2",{id:"call-for-a-vote"},"Call for a Vote"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Vote procedure")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"ShenYu community vote: send the vote e-mail to ",(0,s.kt)("inlineCode",{parentName:"p"},"dev@shenyu.apache.org"),".\nPPMC needs to check the rightness of the version according to the document before they vote.\nAfter at least 72 hours and with at least 3 ",(0,s.kt)("inlineCode",{parentName:"p"},"+1 mentor")," votes, it can come to the next stage of the vote.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Announce the vote result: send the result vote e-mail to ",(0,s.kt)("inlineCode",{parentName:"p"},"dev@shenyu.apache.org"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Incubator community vote: send the vote e-mail to ",(0,s.kt)("inlineCode",{parentName:"p"},"general@incubator.apache.org"),".\nAfter at least 72 hours and with at least 3 ",(0,s.kt)("inlineCode",{parentName:"p"},"+1 binding")," votes, it can come to announce the vote.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Announce the vote result: send the result vote e-mail to ",(0,s.kt)("inlineCode",{parentName:"p"},"general@incubator.apache.org"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Vote Templates")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"ShenYu Community Vote Template")),(0,s.kt)("p",null,"Title:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n\n")),(0,s.kt)("p",null,"Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hello ShenYu Community,\n\nThis is a call for vote to release Apache ShenYu (incubating) version ${RELEASE.VERSION}\n\nRelease notes:\nhttps://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/${RELEASE.VERSION}/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/${STAGING.REPOSITORY}/org/apache/shenyu/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-shenyu/tree/v${RELEASE.VERSION}/\n\nRelease Commit ID:\nhttps://github.com/apache/incubator-shenyu/commit/xxxxxxxxxxxxxxxxxxxxxxx\n\nKeys to verify the Release Candidate:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS\n\nLook at here for how to verify this release candidate:\nhttps://shenyu.apache.org/community/release/#check-release\n\nGPG user ID:\n${YOUR.GPG.USER.ID}\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve \n\n[ ] +0 no opinion\n \n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code distributions have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each ShenYu repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Announce the vote result")),(0,s.kt)("p",null,"Title:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"We\u2019ve received 7 +1 votes:\n\n+1, xxx (mentor)\n+1, xxx (mentor)\n+1, xxx (mentor)\n+1, xxx (ppmc)\n+1, xxx (ppmc)\n+1, xxx (ppmc)\n+1, xxx (ppmc)\n\nThank you everyone for taking the time to review the release and help us. \n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Incubator Community Vote Template")),(0,s.kt)("p",null,"Title:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hello Incubator Community,\n\nThis is a call for vote to release Apache ShenYu (incubating) version ${RELEASE.VERSION}\n\nThe Apache ShenYu community has voted on and approved a proposal to release \nApache ShenYu (incubating) version ${RELEASE.VERSION}.\n\nWe now kindly request the Incubator PMC members review and vote on this\nincubator release.\n\nShenYu community vote thread:\nhttps://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\n\nVote result thread:\nhttps://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\n\nRelease notes:\nhttps://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/${RELEASE.VERSION}/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/${STAGING.REPOSITORY}/org/apache/shenyu/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-shenyu/tree/${RELEASE.VERSION}/\n\nRelease Commit ID:\nhttps://github.com/apache/incubator-shenyu/commit/xxxxxxxxxxxxxxxxxxxxxxx\n\nKeys to verify the Release Candidate:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS\n\nLook at here for how to verify this release candidate:\nhttps://shenyu.apache.org/community/release/#check-release\n\nGPG user ID:\n${YOUR.GPG.USER.ID}\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve \n\n[ ] +0 no opinion\n \n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code distributions have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each ShenYu repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Announce the vote result")),(0,s.kt)("p",null,"Title:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hi,\n\nThe vote to release Apache ShenYu (incubating) ${RELEASE.VERSION} has passed with\n6 +1 binding and 1 +1 non-binding votes, no +0 or -1 votes.\n\nBinding votes:\nxxx\nxxx\nxxx\nxxx\nxxx\nxxx\n\nNon-Binding votes:\nxxx\n\nVote thread:\nhttps://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\n\nThanks a lot to everyone for taking your time to review our release candidate.\nWe will proceed with publishing the approved artifacts and sending out the\nannouncements in the coming days.\n")),(0,s.kt)("h2",{id:"finish-the-release"},"Finish the Release"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. Move source packages, binary packages and KEYS from the ",(0,s.kt)("inlineCode",{parentName:"strong"},"dev")," directory to ",(0,s.kt)("inlineCode",{parentName:"strong"},"release")," directory")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/incubator/shenyu/${RELEASE.VERSION} https://dist.apache.org/repos/dist/release/incubator/shenyu/ -m "transfer packages for ${RELEASE.VERSION}"\nsvn delete https://dist.apache.org/repos/dist/release/incubator/shenyu/KEYS -m "delete KEYS"\nsvn cp https://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS https://dist.apache.org/repos/dist/release/incubator/shenyu/ -m "transfer KEYS for ${RELEASE.VERSION}"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. Find ShenYu in staging repository and click ",(0,s.kt)("inlineCode",{parentName:"strong"},"Release"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. Merge release branch to ",(0,s.kt)("inlineCode",{parentName:"strong"},"master")," and delete release branch on Github")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit merge origin/${RELEASE.VERSION}-release\ngit pull\ngit push origin master\ngit push --delete origin ${RELEASE.VERSION}-release\ngit branch -d ${RELEASE.VERSION}-release\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. Docker Release")),(0,s.kt)("p",null,"4.1 Preparation"),(0,s.kt)("p",null,"Install and start docker service"),(0,s.kt)("p",null,"4.2 Compile Docker Image"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout v${RELEASE.VERSION}\ncd ~/shenyu/shenyu-dist/\nmvn clean package -Prelease,docker\n")),(0,s.kt)("p",null,"4.3 Tag the local Docker Image"),(0,s.kt)("p",null,"Check the image ID through ",(0,s.kt)("inlineCode",{parentName:"p"},"docker images"),", for example: e9ea51023687 and e9ea51023688"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker tag e9ea51023687 apache/shenyu-bootstrap:latest\ndocker tag e9ea51023687 apache/shenyu-bootstrap:${RELEASE.VERSION}\ndocker tag e9ea51023688 apache/shenyu-admin:latest\ndocker tag e9ea51023688 apache/shenyu-admin:${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"4.4 Publish Docker Image"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker login\ndocker push apache/shenyu-bootstrap:latest\ndocker push apache/shenyu-bootstrap:${RELEASE_VERSION}\ndocker push apache/shenyu-admin:latest\ndocker push apache/shenyu-admin:${RELEASE_VERSION}\n")),(0,s.kt)("p",null,"4.5 Confirm the successful release"),(0,s.kt)("p",null,"Login Docker Hub to check whether there are published images in ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/shenyu-bootstrap/"},"shenyu-bootstrap")," and ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/shenyu-admin/"},"shenyu-admin")," "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"5. Publish release in GitHub")),(0,s.kt)("p",null,"Click ",(0,s.kt)("inlineCode",{parentName:"p"},"Edit")," in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/releases"},"GitHub Releases"),"'s ",(0,s.kt)("inlineCode",{parentName:"p"},"${RELEASE_VERSION}")," version"),(0,s.kt)("p",null,"Edit version number and release notes, click ",(0,s.kt)("inlineCode",{parentName:"p"},"Publish release")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"6. Update the download page")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/projects/shenyu/download/"},"https://shenyu.apache.org/projects/shenyu/download/")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/projects/shenyu/download/"},"https://shenyu.apache.org/zh/projects/shenyu/download/")),(0,s.kt)("p",null,"Download links should use ",(0,s.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.lua"},"https://www.apache.org/dyn/closer.lua")," not closer.cgi or mirrors.cgi"),(0,s.kt)("p",null,"GPG signatures and hashes (SHA* etc) must use URL start with ",(0,s.kt)("inlineCode",{parentName:"p"},"https://downloads.apache.org/incubator/shenyu/")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"7. Announce release completed by email")),(0,s.kt)("p",null,"Send e-mail to ",(0,s.kt)("inlineCode",{parentName:"p"},"general@incubator.apache.org")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"dev@shenyu.apache.org")," to announce the release is complete"),(0,s.kt)("p",null,"Announcement e-mail template:"),(0,s.kt)("p",null,"Title:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[ANNOUNCE] Apache ShenYu (incubating) ${RELEASE.VERSION} available\n")),(0,s.kt)("p",null,"Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hi,\n\nApache ShenYu (incubating) Team is glad to announce the new release of Apache ShenYu (incubating) ${RELEASE.VERSION}.\n\nApache ShenYu (incubating) is an asynchronous, high-performance, cross-language, responsive API gateway.\nSupport various languages (http protocol), support Dubbo, Spring-Cloud, Grpc, Motan, Sofa, Tars and other protocols.\nPlugin design idea, plugin hot swap, easy to expand.\nFlexible flow filtering to meet various flow control.\nBuilt-in rich plugin support, authentication, limiting, fuse, firewall, etc.\nDynamic flow configuration, high performance.\nSupport cluster deployment, A/B Test, blue-green release.\n\nDownload Links: https://shenyu.apache.org/projects/shenyu/download/\n\nRelease Notes: https://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n\nWebsite: https://shenyu.apache.org/\n\nShenYu Resources:\n- Issue: https://github.com/apache/incubator-shenyu/issues\n- Mailing list: dev@shenyu.apache.org\n- Documents: https://shenyu.apache.org/projects/shenyu/overview/\n\n\n- Apache ShenYu (incubating) Team\n\n--\n\nDISCLAIMER\n\nApache ShenYu (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\nIncubation is required of all newly accepted projects until a further review indicates that the infrastructure,\ncommunications, and decision making process have stabilized in a manner consistent with other successful ASF projects.\nWhile incubation status is not necessarily a reflection of the completeness or stability of the code,\nit does indicate that the project has yet to be fully endorsed by the ASF.\n\n")))}h.isMDXComponent=!0}}]);