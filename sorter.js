/*HW8_sort of web2.0, qiangbo_14331229,group 11*/
/*the .js of the sort*/
/**/

$(document).ready(function() {

	var module = (function(){

        var loop = 1;
        init_function();
        var if_diff = 0;
        function init_function(){           
            var tableobjs=$('table');
            var n = 0;
            _.times(tableobjs.length, function() {
                n_table(n++);              
            });
        }

        function n_table(n) {
        	var tableobjs=$('table');
        	var nHead = tableobjs[n].rows[0];
        	var col = 0;        	
        	_.times(nHead.cells.length, function() {
        	    click_func(nHead, col, n);
        	    col++;
        	});
        	
        }

        function click_func(nHead, col, n) {
        	nHead.cells[col].onclick = function(){
        	    loop = (-1) * loop;
        	        if (if_diff == col) { // 0_col
                        updownchange(col,n);
                    } else {
        	            if_diff = col; // 
                        loop = -1;
                      	updownchange(col,n);
                    } 
                Sort_table(col, n);
            }
        }

        
        function updownchange(col, n) {     	
            var tableobjs1=$('table');
        	var temp = tableobjs1[n].rows[0];
        	if (loop == -1) {
        		temp.cells[col].setAttribute('class', 'thcss1');
        		other_cells(col,n);
        		
        	} else if (loop  == 1){
              	temp.cells[col].setAttribute('class', 'thcss2');
              	other_cells(col,n);
              	
        	}          
        }

        function other_cells(col,n) {
            var tableobjs2=$('table');
        	var temp2 = tableobjs2[n].rows[0];
        	var ss = 0;
        	_.times(temp2.cells.length, function () {
        		if (ss != col) temp2.cells[ss].setAttribute('class', 'th');
        		ss++;
        	});
        }
        
        function Sort_table(col,n) {
			var all_tables =$('table');
			var this_table = all_tables[n];
			var table_word = this_table.tBodies[0];
			var old_word = table_word.rows;			
			var new_word = new Array();
			var i = 0;
			_.times(old_word.length,function(){
				new_word[i] = old_word[i]; i++;
			});
			if (table_word.sortCol == col) {
			    new_word.reverse();
			} else {
			    new_word.sort(comp(col)); 
			}
			show_table(new_word,table_word,col);
        }

        function show_table(new_word,table_word, col) {
        	var show_new_word = document.createDocumentFragment();
        	var i = 0;
        	_.times(new_word.length,function(){
				show_new_word.appendChild(new_word[i]); i++;
			});
			table_word.appendChild(show_new_word);
			table_word.sortCol = col;
        }
 
	    function comp(col) {
			return function compare(first, second) {
			    firstValue = String(first.cells[col].innerHTML);
			    secondValue = String(second.cells[col].innerHTML);
			    if (firstValue < secondValue) {
			        return -1;
			    } else if (firstValue > secondValue) {
			        return 1;
			    } else {
			        return 0;
			    }
			};
		}
			 
	   
	})();
})
