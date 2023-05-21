# CDN (Content Delevery Network)

It's a geographically distributed group of servers that work together to provide fast delivery of internet content.

**Content**: The content or assets can be anything, HTML pages, CSS files, Javascript files, images, videos, songs etc.

>```<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"> ```
>>Here we are requesting google font to provide particular font Design 

**Delivery** : Providing Internet Content to Client

**NetWork** : Group of Servers Working toghter to send Content back to the Client therefore it's call Network


Consider a Game game server located in US 
here , consider
    player1 from *India*
    player2 from *US* 

same server for player1 taking 300ms and player 2 taking 20ms,
actions perfomed by player 2 are received, processed and distributed much faster compared to player1

To tackle this Services Like Amazon, Netflix etc..
They Install a group/cluster of servers in many different locations around the globe that contain data  and these in turn are connected to the main server which provides all the data.


![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://res.cloudinary.com/practicaldev/image/fetch/s--ZdvnJE5B--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xldmv5thyqkugia0yx2c.png)

## Advantages of Implementing CDN

1>**Decrease load** : Each server will serve customers in that region which will bring down load on whole system.

2> **Faster Content Delivery** : Now load is Decresed , its efficiency of file transfer got increased


3> **Protection against potential DDOS attacks** :
many servers are located, if one server is get affected by **DDOS** other backup server kicks into action and serve customers in that region


