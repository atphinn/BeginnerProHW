import time
from selenium import webdriver

#for using a browser
browser = webdriver.firefox("/Users/alphinn/Downloads")
#BB PS5 page
browser.get = webdriver("https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149")
buyButton = False

def productPage(self):
    
    while not buyButton:
        try:
            #If this works there the button is not open
            addToCartBtn = addButton = browser.find_element_by_class_name("btn-disabled")

            # Button isnt open restart the script
            print("Button isnt ready yet.")

            # Refresh page after a delay
            time.sleep(1)
            browser.refresh()
        except:

            addToCartBtn = addButton = browser.find_element_by_class_name("btn-primary")

            #Click the button and end the script
            print("Button was clicked.")
            addToCartBtn.click()
            buyButton = True
       

def productPopUp(self):
    
    while not buyButton:
        try:
            goToCart = browser.find_element_by_class_name("btn-disabled")
            # Button isnt open restart the script
            print("Button isnt ready yet.")

                # Refresh page after a delay
            time.sleep(1)
            browser.refresh()
        
        except:    
         #Click the button and end the script
            goToCart = browser.find_element_by_class_name("btn-secondary")
            print("Button was clicked.")
            goToCart.click()
            buyButton = True
        

def cartPage(self):
    try:
            goToCart = browser.find_element_by_class_name("btn-disabled")
            # Button isnt open restart the script
            print("Sold out.")

                # Refresh page after a delay
            time.sleep(1)
            browser.refresh()
        
    except:    
        #Click the button and end the script
        goToCart = browser.find_element_by_class_name("btn-primary")
        print("Purchased")
        goToCart.click()
        buyButton = True
    

#add to cart tag
#<a aria-disabled="false" class="btn btn-secondary btn-sm btn-block " href="/cart" role="button" tabindex="0">Go to Cart</a>



#https://www.bestbuy.com/cart
#<button class="btn btn-lg btn-block btn-primary" type="button" data-track="Checkout - Top">Checkout</button>
