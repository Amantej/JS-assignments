function CountdownTimer(obnm){
    var endct =0; 
    var ctmin =0; 
    var ctsec =0;  
    var startchr =0;  
    var ctpause =-1;  
    var el_showmns = document.getElementById('showmns');
    var el_showscs = document.getElementById('showscs');
    var el_mns = document.getElementById('mns');
    var el_scs = document.getElementById('scs');
    var el_btnct = document.getElementById('btnct');
    var el_btnct_res = document.getElementById('btnct_res');
    var el_btnct_end = document.getElementById('btnct_end');
    function startPauseCT(){
      if(parseInt(el_mns.value) >0 || parseInt(el_scs.value)>0 || endct ==1){
        ctpause *=-1;
        if(ctpause ==1){ 
          el_btnct.value ='PAUSE';
          window[obnm].countdownTimer();
        }
        else el_btnct.value ='RESUME';
      }
    }

    function endCT(){
      

      return false;
    }

    this.countdownTimer = function(){
      if(startchr == 0 && el_mns && el_scs) {
        ctmin = parseInt(el_mns.value);
        ctsec = parseInt(el_scs.value);
        if(isNaN(ctmin)) ctmin = 0;
        if(isNaN(ctsec)) ctsec = 0;
        el_mns.value = ctmin;
        el_scs.value = ctsec;
        startchr = 1;
      }

      if(ctmin >0 || ctsec >0) endct =1;  
      if(ctmin==0 && ctsec==0 && endct ==1){
        startchr =0;
        ctpause =-1;
        endct =0;
        el_btnct.value ='START';
        endCT();
      }
      else if(startchr ==1 && ctpause ==1){
        ctsec--;
        if(ctsec < 0){
          if(ctmin > 0) {
            ctsec = 59;
            ctmin--;
          }
          else {
            ctsec = 0;
            ctmin = 0;
          }
        }
        setTimeout(obnm +'.countdownTimer()', 1000); 
      }
      el_showmns.innerHTML = ctmin;
      el_showscs.innerHTML = ctsec;
    }
    if(el_btnct) el_btnct.addEventListener('click', startPauseCT);
    if(el_btnct_res) el_btnct_res.addEventListener('click', function(){ startchr =0; if(ctpause ==-1) startPauseCT(); });
    if(el_btnct_end) el_btnct_end.addEventListener('click', function(){ el_mns.value =0; el_scs.value =0; startchr =0; startPauseCT(); });
  }
  var obCT = new CountdownTimer('obCT');