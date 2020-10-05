import sys,re,os,json

file = open('/Users/zhouyizhen/Art/public/data/art_dictionary.txt', 'r')
lines = file.readlines()
result = {}
i = 0
for l in lines:
    l = l.strip("\n")
    if l and l.strip():
        string = l.split("  ")
        print(string)
        if len(string) == 2:
            result[string[0]] = string[1]

with open("/Users/zhouyizhen/Art/public/data/art_dictionary_js.txt", "w") as file1:
    jas = json.dumps(result)
    file1.write(jas)
    
