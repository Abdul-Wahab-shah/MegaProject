import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=''})

{
  return (
    <div className='w-full'>
    {label && <label className='inline-block mb-1 pl-1'>
{label}
    </label>} 
<Controller
    name={name || "content"}
    control={control}
    render={({field:{onChange}})=>(
        <Editor
            initialValue={defaultValue}
            init={{
                initialValue:defaultValue,
                height:500,
                menubar:true,
                Plugin:[
                    'advlist', 'autolink', 'lists' ,'link',' image' ,'charmap', 'print',' preview',' anchor ',
                    'searchreplace', 'visualblocks',' code',' fullscreen ',
                    'inserdatetime',' media',' table',' poste',' code',' help',' wordcount '
                ],
                toolbar:' undo redo | formateselect | blod italic | underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformate | help '

            }}
            onEditorChange={onChange}
        />
    )
    }
/>
    </div>
  )
}

