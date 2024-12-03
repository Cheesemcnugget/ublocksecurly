/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    let code = prompt("1. Ethanol - A
2. Fermentation - A
3. Depressant - C
4. Binge Drinking - B
5. Alcohol Poisoning - B

**Five factors that influence the beginning and intensity of alcohol's short-term effects**:
- Body weight
- Gender
- Age
- Food intake
- Tolerance

### Alcohol Lesson 2
**Five benefits of being alcohol-free**:
- Maintaining a healthy body
- Have more healthy relationships
- You make healthy decisions
- Financial savings
- More mood stability

6. Physiological dependence on alcohol - A
7. Alcohol's influence on sexual activity - D
8. Most likely to influence a teen to use alcohol - A
9. Young people living with alcohol-abusing family members - D
10. Easiest way to live alcohol-free - A

### Alcohol Lesson 3
1. True
2. True
3. True
4. True
5. True
6. Blood Alcohol Concentration (BAC) - Blood Alcohol Concentration (BAC)
7. Fetal Alcohol Syndrome (FAS) - Fetal Alcohol Syndrome (FAS)
8. Detoxification - Detoxification
9. Alcoholic - Alcoholic
10. Recovery - Recovery

### Illegal Drugs Lesson 1
1. Illicit Drug Use - Illicit Drug Use
2. Substance Abuse - Substance Abuse
3. Overdose - Overdose
4. Addiction - Addiction
5. Illegal Drugs - Illegal Drugs
6. True
7. True
8. False
9. True
10. False

### Illegal Drugs Lesson 2
1. False
2. True
3. False
4. True
5. True
6. A
7. A
8. B
9. A
10. A

### Illegal Drugs Lesson 3
1. A
2. A
3. A
4. A
5. A
6. True
7. True
8. True
9. True
10. True");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    eval(code);
  }
});
