/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_music1}", "click", function(sym, e) {
         
         
         // Set a toggle to play or pause an audio track 
         if (sym.$("we-wish-you-a-merry-christmas")[0].paused) {
         	sym.$("we-wish-you-a-merry-christmas")[0].play();
         } else {
         	sym.$("we-wish-you-a-merry-christmas")[0].pause();
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to play or pause an audio track 
         if (sym.$("we-wish-you-a-merry-christmas")[0].paused) {
         	sym.$("we-wish-you-a-merry-christmas")[0].play();
         } else {
         	sym.$("we-wish-you-a-merry-christmas")[0].pause();
         }
         

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-19445769");