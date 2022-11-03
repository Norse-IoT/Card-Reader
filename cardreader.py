text = input("Swipe card: ")
while text.find("+") != -1:
    # read only student id
    text = text.split("+")[1]
    # remove stray ?
    text = text.split("?")[0]
    # except a bad swipe
    if text == "E":
        print("Bad swipe, please re-swipe!")
    else:
    # write to file
        with open('attendees.txt', 'a') as file:
                file.write(text + "\n")
    # re-prompt for next card
    text = input("Swipe card: ")