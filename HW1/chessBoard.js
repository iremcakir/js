
    for( var x = 1; x <= 8; x++)
     {
         for(y = 1; y <= 8; y++)
	        {
		
		 var result = (x+y)%2 ;
		
            if(result ==0 )
		     {
              document.write  ("A");
             }
			 else
		    {
              document.write  ("B");
            }
	        }	
			document.write("<br>");
      }
