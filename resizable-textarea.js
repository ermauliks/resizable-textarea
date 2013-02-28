/*
Copyright 2013 Maulik Suchak
http://mauliksuchak.in/
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function( $ ) {
	$.fn.resizable = function() {	

		
	    this.each(function(){
				autoresize(this);
		}).bind('keyup', function(e){
				autoresize(this);
		});
	};
	$(window).resize(function(){
		this.each(function(){
		autoresize(this);
		});
	})

    function autoresize(textarea) {	
        textarea.style.height = 0; //reset scrollbar
        textarea.style.height = textarea.scrollHeight + 12 + 'px';
        if (textarea.value.trim() == '' )
	        textarea.style.height = 26 + 'px';
    }
})( jQuery );
