import tkinter as tk
from tkinter import *
class App(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        self.pack()

        

        self.entrythingy = tk.Entry()
        self.entrythingy.pack()
        self.txt= Text() 
        self.txt.pack() 
        self.entrythingy.focus()
        
        # Create the application variable.
        self.contents = tk.StringVar()
        # Set it to some value.
        self.contents.set("Swipe Card: ")
        # Tell the entry widget to watch this variable.
        self.entrythingy["textvariable"] = self.contents
        # Define a callback for when the user hits return.
        # It prints the current value of the variable.
        self.entrythingy.bind('<Key-Return>', self.cardreader)
    def cardreader(self, event):
        
        text = self.contents.get()
        while text.find("+") != -1:
            self.contents.set("Swipe card: ")
            self.entrythingy["textvariable"] = self.contents
            # read only student id
            text = text.split("+")[1]
            # remove stray ?
            text = text.split("?")[0]
            # except a bad swipe
            if text == "E":
                print("Bad swipe, please re-swipe!")
            else:
            # write to file
                text = text + "\n"
                self.txt.insert(END,text)
                with open('attendees.txt', 'a') as file:
                        file.write(text)
            # re-prompt for next card
            text = self.contents.get()
            
            
        

root = tk.Tk()

myapp = App(root)
root.geometry('500x200')

root.title("Norse IOT Club Attendance App")
myapp.mainloop()