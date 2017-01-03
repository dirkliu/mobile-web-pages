
	var checkAll = $('.check-all');
	var thisI = checkAll.children('i');
	var lii = $('.bm-list>li').children('i');//一级
	var ejLii = $('.ej-bm-list>li').children('i');//二级
	var memberLii = $('.bm-member-list>li').children('i');//三级
	var newp = $('<p>');
	var newspan = $('<span>');

	
	var newArr = [];//新建数组
	var str = '';//定义字符串
	var checkedIs = $('.bm-next').prev();//获取列表
	

	var ilist = $('.select-main').find('i'); 
	var isLength = ilist.length;
	// alert(isLength)
	var num = 0;
	function btnChange(num){
		//选择对象不为空则按钮可用
		if(num>0){
			$('.select-over').css('color','#fff').removeAttr('disabled');
		}else{
			$('.select-over').css('color','#cc8a20').attr('disabled','disabled');
		}
	}

	$('.bm-list .bm-next').click(function(){//点击显示二级
		var thisTxt = $(this).children('span').text();
		$('.bm-list').hide().prev().hide();//隐藏一级部门
		$('.bm-list').next().show();//显示二级级部门
		$('.goback,.sjgoback').hide();//隐藏返回按钮
		$('.ejgoback').show();//显示二级返回按钮
		newp.text(thisTxt);
		$('.submenu').append(newp).show();
	});
	$('.ej-bm-list .bm-next').click(function(){//点击显示三级
		$('.goback,.ejgoback').hide();//隐藏返回按钮
		$('.sjgoback').show();//显示三级返回按钮
		var thisTxt = $(this).children('span').text();
		newspan.text(thisTxt);
		$('.submenu').append(newspan);
		$('.ej-bm-list').hide().next().show();//隐藏二级部门显示三级部门
	});
	// $('.bm-member-list .bm-next').click(function(){//三级
		// window.location.href = '';
	// 	addSle($(this).prev());
	// })
	$('.ejgoback').click(function(){//二级返回一级
		$(this).hide().prev().show();
		$('.check-all').show();
		$('.submenu').hide().children('p:last').remove();
		$('.ej-bm-list').hide().prev().show();
	});
	$('.sjgoback').click(function(){//三级返回二级
		$(this).hide().prev().show();
		$('.submenu').children('span').remove();
		$('.bm-member-list').hide().prev().show();
	});

	thisI.click(function(){
		if(thisI.attr('checked')){
			remSle(thisI);
			remSle(lii);
			num=0;
			btnChange(num);
		}else{
			addSle(thisI);
			addSle(lii);
			num=isLength;
			btnChange(num);
		}
	});
	// checkAll.click(function(){
	// 	if(thisI.attr('checked')){
	// 		remSle(thisI);
	// 		remSle(lii);
	// 		num=0;
	// 		btnChange(num);
	// 	}else{
	// 		addSle(thisI);
	// 		addSle(lii);
	// 		num=isLength;
	// 		btnChange(num);
	// 	}
	// });
	liIs(lii);
	liIs(ejLii);
	liIs(memberLii);
	function liIs(obj){
		obj.click(function(){
			var that = $(this);
			if(that.attr('checked')){
				remSle(that);
				num=num-1;
				btnChange(num);
				if(thisI.attr('checked')){
					remSle(thisI);
				}
			}else{
				addSle(that);
				++num;
				btnChange(num);
			}
			
		})
	}
	function remSle(obj){
		obj.removeClass('selected').css('border','1px solid #bec4cb').removeAttr('checked');
	}
	function addSle(obj){
		obj.addClass('selected').css('border','none').attr('checked','checked');
	}


	//点击效果
	$('.check-all').on('touchstart',function(){
		$(this).css('background','#e4e4e4');
	})
	$('.bm-next').on('touchstart',function(){
		$(this).parent().css('background','#e4e4e4');
	})

	$('.check-all').on('touchend',function(){
		$(this).css('background','transparent');
	})
	$('.bm-next').on('touchend',function(){
		$(this).parent().css('background','transparent');
	})
