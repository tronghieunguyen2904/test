function checkDN(event)
        {
            var user = document.getElementById('user').value;
            var pass = document.getElementById('pass').value;
            var name = document.getElementById('name').value;
            var time= document.getElementById('time').value;
            var mess=document.getElementById('errorText');
            if(user=='')
            {
                document.getElementById('user').style.borderColor='red';
                document.getElementById('errorText').style.color='red';
                mess.innerHTML+='Tên đăng nhập không được để trống';
            }
            if(pass=='')
            {
                document.getElementById('pass').style.borderColor='red';
                document.getElementById('errorText').style.color='red';
                mess.innerHTML+=' Mật khẩu không được để trống';
            }
            if(name=='')
            {
                document.getElementById('name').style.borderColor='red';
                document.getElementById('errorText').style.color='red';
                mess.innerHTML+=' Tên không được để trống';
            }
            if(time=='')
            {
                document.getElementById('time').style.borderColor='red';
                document.getElementById('errorText').style.color='red';
                mess.innerHTML+=' Ngày sinh không được để trống';
            }
        }
     
        function check()
        {
            var mess = document.getElementById('errorText');

             mess.innerHTML = '';

             checkDN(event);
            //  checkMK(event);
           
        }