let app = new Vue(
    {
        el: '#root',
        data: {
            newMessage: '',
            currentIndex: 0,
            contacts: [
                {
                name: 'Barack Obama',
                avatar: 'obama.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
                },
                {
                name: 'Cristiano Ronaldo',
                avatar: 'cr7.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                },
                {
                name: 'Matteo Berrettini',
                avatar: 'berrettini.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
                },
                {
                name: 'Elon Musk',
                avatar: 'elonmusk.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
                },
                ]
        }, 
        methods: {
            sendMessage: function(currentIndex) {
                const message = {
                    date: '28/02/2022',
                    text: this.newMessage,
                    status: 'sent'
                }

                this.contacts[0].messages.push(message)
                this.newMessage = '';
                // console.log(currentIndex)
                console.log(this.contacts[0])
                // console.log(message),
            }
        }
    }
)