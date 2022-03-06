import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'



function wordAssociate(word: string) {

  var options = {
    method: 'GET',
    url: 'https://api.apilayer.com/spell/spellchecker',
    params: { q: word },
    headers: {
      'apikey': process.env.API_KEY,
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}


async function spellCheck(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('req.body 英文字', req.body)
    const res = await wordAssociate(req.body)

    console.log('word associate res data: ', res)


  }
}

export default spellCheck