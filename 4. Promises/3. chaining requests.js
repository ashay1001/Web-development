/*

    It is used to avoid callback hell

    Request1 --> Request2 --> Request3
    All these requets are asynchronous but we want them to get executed inn above order. 
    
    Using Ajax we can do this in following manner:
    $.ajax({
        success: funstion(){
            $.ajax({
                success: function(){
                    $.ajax({

                    })
                }
            })
        }
    })

    This is hard to read. Code structure is also not neet.
    We can do this using promises in much easier way.

    promise1.then().then().then().catch()

    when we will get first unsuccessful promise then catch will be executed
*/