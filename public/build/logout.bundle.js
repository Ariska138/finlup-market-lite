(()=>{"use strict";let t=null;$((function(){let n=new class{constructor(n,e){return t||(t=this),this.auth=n.auth(),this.uid=e,t}checkAuth(n,e){t.auth.onAuthStateChanged((t=>{t?n(t):e()}))}checkAuthAdmin(n,e){t.auth.onAuthStateChanged((a=>{a&&a.uid==t.uid?n():e()}))}async signIn(n,e){return await t.auth.signInWithEmailAndPassword(n,e)}async logout(){await t.auth.signOut()}async signInByAdmin(n,e){return await new Promise((async function(a,u){await t.auth.signInWithEmailAndPassword(n,e).then((async n=>{n.user.uid==t.uid?a(n.user):(await t.logout(),u("not have access"))})).catch((t=>{u(t)}))}))}createAccount(n,e){return t.auth.createUserWithEmailAndPassword(n,e)}removeAccount(){t.auth.currentUser.delete().then((function(){})).catch((function(t){}))}sentVerificationEmail(){t.auth.currentUser.sendEmailVerification().then((function(){})).catch((function(t){}))}updateEmail(n){t.auth.currentUser.updateEmail(n).then((function(){})).catch((function(t){}))}updateProfile(n,e=""){t.auth.currentUser.updateProfile({displayName:n,photoURL:e}).then((function(){})).catch((function(t){}))}updatePassword(n){t.auth.currentUser.updatePassword(n).then((function(){})).catch((function(t){}))}async getUser(){return await t.auth.currentUser}sendResetPassword(n){t.auth.sendPasswordResetEmail(n).then((function(){})).catch((function(t){}))}}(firebase);const e=window.location.hostname;console.log(e),n.checkAuth((()=>{n.logout(),window.open("/","_self")}),(()=>{window.open("/","_self")}))}))})();