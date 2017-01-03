/* 发红包 */
$(function(){
	//点击选择是否允许打劫
	$('.slide-btn').click(function(){
		if($(this).children().attr('checked')){
			$(this).css('background','#fff').children().css('transform','translateX(0)').removeAttr('checked');
		}else{
			$(this).css('background','#4cd964').children().css('transform','translateX(28px)').attr('checked','checked');
		}
		$('.robnum').slideToggle();
	})

	$('.robnums').focus(function(){
		$('body').animate({
			'marginTop':'-20%'
		})
	});
	$('.robnums').blur(function(){
		$('body').animate({
			'marginTop':'0'
		})
	});
	$('.txtare>textarea').focus(function(){
		$('body').animate({
			'marginTop':'-30%'
		})
	});
	$('.txtare>textarea').blur(function(){
		$('body').animate({
			'marginTop':'0'
		})
	});
	
	var reg=/^[-+]?\d*$/;//判断是否为整数
	
	//检查输入内容
	checkNum('.rednums');
	checkNum('.codenums');
	checkNum('.robnums');

	function checkNum(id){
		$(id).blur(function(){
			if(!reg.test($(this).val())){
				$(this).parent().parent().next().show();
			}else{
				$(this).parent().parent().next().hide();
				if($(this).attr('class') == 'codenums'){
					$('.code-number>i').text($(this).val());//计算发送的总积分
				}
			}
		})
	}
	//控制按钮属性
	$('.codenums,.rednums').blur(function(){
		if($('.codenums').val()=='' || $('.rednums').val()==''){
			$('.btn-red').css('background','#f5978c').attr('disabled','disabled');
		}
		if($('.rednums').val()!='' && $('.codenums').val()!=''){
			$('.btn-red').css('background','#de322e').removeAttr('disabled');
		}
	})
	//点击发送
	$('.btn-red').click(function(){
		var robNum = $('.robnums');
		var slidBtn = $('.slide-btn').children('i');
		if(slidBtn.attr('checked') && robNum.val() == ''){
			alert('请输入打劫次数！')
		}else if(pwData == ''){//判断是否有支付密码
			$('#setKey').animate({
				'left':'50%'
			});
			$('.layer').show();
		}
		if(pwData != ''){
			$('#keyboard').animate({
				'left':'50%'
			});
			$('.layer').show();
		}
	})
})