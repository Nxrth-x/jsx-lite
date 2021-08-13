// @ts-check
import './types'

export default class jsxLite {
  /**
   *
   * @param {string | ((props: any) => ElementType)} element Element tag name
   * @param {any} props
   * @param  {Array<ElementType | string>} children
   * @returns {ElementType}
   */
  static createElement(element, props, ...children) {
    if (typeof element === 'function') {
      return element({ ...props, children })
    }

    return {
      tag: element,
      props,
      children,
    }
  }

  /**
   *
   * @param {string | number} text
   * @returns
   */
  static renderTextNode(text) {
    return document.createTextNode(
      typeof text === 'string' ? text : text.toString()
    )
  }

  static mountToRoot(element, rootNode) {
    rootNode.appendChild(jsxLite.render(element))
  }

  /**
   *
   * @param {HTMLElement} node
   * @param {string} eventName
   * @param {(e?: any) => (Promise<void> | void)} callback
   */
  static addEventListenerToNode(node, eventName, callback) {
    node.addEventListener(eventName, callback)
  }

  static addPropsToNode(node, props) {
    for (const prop in props) {
      if (prop.startsWith('on')) {
        const eventName = prop.substring(2)
        jsxLite.addEventListenerToNode(node, eventName, props[prop])
      } else {
        node.setAttribute(prop, props[prop])
      }
    }
  }

  /**
   *
   * @param {HTMLElement} rootNode
   * @param {Array<string | ElementType>} children
   */
  static renderChildrenElements(rootNode, children) {
    children.forEach(child => {
      rootNode.appendChild(jsxLite.render(child))
    })
  }

  /**
   *
   * @param {ElementType | string | number} element
   * @returns
   */
  static render(element) {
    if (typeof element === 'string' || typeof element === 'number') {
      return jsxLite.renderTextNode(element)
    }

    const rootNode = document.createElement(element.tag)
    jsxLite.addPropsToNode(rootNode, element.props)
    jsxLite.renderChildrenElements(rootNode, element.children)

    return rootNode
  }
}
