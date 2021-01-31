import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types"

const FileSearch = ({ title, onFileSearch }) => {
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue] = useState('')
    let node = useRef(null)

    const closeSearch = (event) => {
        event.preventDefault()
        setInputActive(false)
        setValue('')
    }

    useEffect(() => {
        const handleInputEvent = (event) => {
            const {keyCode} = event
            if (keyCode === 13 && inputActive) { // enter
                onFileSearch(value)
            } else if (keyCode === 27 && inputActive) { // esc
                closeSearch(event)
            }
        }

        document.addEventListener('keyup', handleInputEvent)

        return () => {
            document.removeEventListener('keyup', handleInputEvent)
        }
    })

    useEffect(() => {
        if (inputActive) {
            node.current.focus()
        }
    }, [inputActive])

    return (
        <div className="d-flex justify-content-between align-items-center alert alert-primary">
            {!inputActive &&
                <>
                    <span>{title}</span>
                    <button 
                       type="button" 
                       className="icon-search"
                       onClick={() => setInputActive(true)}
                    >
                        <FontAwesomeIcon title="搜索" size="lg" icon={faSearch} /> 
                    </button>
                </>
            }
            {inputActive && 
                <>
                    <input 
                      value={value} 
                      className="form-control mr-2"
                      onChange={(e) => {setValue(e.target.value)}}
                      ref={node}
                    />
                    <button 
                       type="button" 
                       className="icon-search"
                       onClick={closeSearch}
                    >
                        <FontAwesomeIcon title="关闭" size="lg" icon={faTimes} /> 
                    </button>
                </>
            }
        </div>
    )
}

FileSearch.propTypes = {
   title: PropTypes.string,
   onFileSearch: PropTypes.func.isRequired 
}

FileSearch.defaultProps = {
    title: '我的云文档'
}

export default FileSearch