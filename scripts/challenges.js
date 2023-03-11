document.addEventListener('DOMContentLoaded', function() {

    // Retorne o valor "Hello, world!" escrito ao inverso
    function challenge1() {

        let value = "Hello, world!"

        return value
    }

    // Retorne os valores pares de 1 a 100
    function challenge2() {

        return ""
    }

    // Retorne os valores ímpares de 1 a 100
    function challenge3() {

        return ""
    }

    // Retorne o maior valor entre o array [22, 33, 6, 100, 5, 20, 48, 99]
    function challenge4() {

        let values = [22, 33, 6, 100, 5, 20, 48, 99]

        return 0
    }

    // Retorne o menor valor entre o array [22, 33, 6, 100, 5, 20, 48, 99]
    function challenge5() {

        let values = [22, 33, 6, 100, 5, 20, 48, 99]

        return 0
    }

    // Retorne a soma dos valores do array [22, 33, 6, 100, 5, 20, 48, 99]
    function challenge6() {

        let values = [22, 33, 6, 100, 5, 20, 48, 99]

        return 0
    }

    // Retorne a soma dos valores pares do array [22, 33, 6, 100, 5, 20, 48, 99]
    function challenge7() {

        let values = [22, 33, 6, 100, 5, 20, 48, 99]

        return 0
    }

    // Retorne a soma dos valores impares do array [22, 33, 6, 100, 5, 20, 48, 99]
    function challenge8() {

        let values = [22, 33, 6, 100, 5, 20, 48, 99]

        return 0
    }

    // Retorne as vogais na sequencia em que foram mostradas na palavra "PARALELEPIPEDO"
    function challenge9() {

        let values = "PARALELEPIPEDO"

        return ""
    }

    // Retorne as consoantes na sequencia em que foram mostradas na palavra "PARALELEPIPEDO"
    function challenge10() {

        let values = "PARALELEPIPEDO"

        return ""
    }

    // ######################################################
    // # DAQUI PARA BAIXO É O CODIGO DE TEST, NÃO MODIFICAR #
    // ######################################################
    document.querySelector("#run-tests").addEventListener("click", ()  => {

        let testResults = document.querySelector("#test-results")
        testResults.innerHTML = ""

        let tests = [
            { name: "challenge1", expectedResult: "!dlrow ,olleH", challenge: challenge1 },
            { name: "challenge2", expectedResult: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70,72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100], challenge: challenge2 },
            { name: "challenge3", expectedResult: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99], challenge: challenge3 },
            { name: "challenge4", expectedResult: 100, challenge: challenge4 },
            { name: "challenge5", expectedResult: 5, challenge: challenge5 },
            { name: "challenge6", expectedResult: 333, challenge: challenge6 },
            { name: "challenge7", expectedResult: 196, challenge: challenge7 },
            { name: "challenge8", expectedResult: 137, challenge: challenge8 },
            { name: "challenge9", expectedResult: "AAEEIEO", challenge: challenge9 },
            { name: "challenge10", expectedResult: "PRLLPPD", challenge: challenge10 },
        ]

        createTestResult(tests).forEach((result) => {

            testResults.appendChild(result)
        })

        let modal = document.querySelector('.modal');
        let instance = M.Modal.init(modal);
        instance.open()
    })

    function resultsAreEqual(result1, result2) {

        if (Array.isArray(result1) || Array.isArray(result2)) {

            return JSON.stringify(result1) == JSON.stringify(result2)
        }

        return result1 == result2
    }

    function createTestResult(tests) {

        let elements = []

        tests.forEach((test) => {

            let item = document.createElement("a")
            item.classList.add("collection-item")

            item.innerText = test.name

            let span = document.createElement("span")
            span.classList.add("new")
            span.classList.add("badge")

            if (resultsAreEqual(test.challenge(), test.expectedResult)) {
                span.setAttribute("data-badge-caption", "Success :)")
                span.classList.add("green")
            } else {
                span.setAttribute("data-badge-caption", "Failure :(")
                span.classList.add("red")
            }

            item.appendChild(span)

            elements.push(item)
        })

        return elements
    }
});