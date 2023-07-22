/* tslint:disable */
/* eslint-disable */
/**
 * ToDo REST API
 * ToDoアプリのREST API。
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * ToDo情報
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * ToDoのID
     * @type {number}
     * @memberof Todo
     */
    id: number;
    /**
     * ToDoのタイトル
     * @type {string}
     * @memberof Todo
     */
    text: string;
    /**
     * ToDoのステータス
     * @type {boolean}
     * @memberof Todo
     */
    completed: boolean;
}

/**
 * Check if a given object implements the Todo interface.
 */
export function instanceOfTodo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "completed" in value;

    return isInstance;
}

export function TodoFromJSON(json: any): Todo {
    return TodoFromJSONTyped(json, false);
}

export function TodoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Todo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'text': json['text'],
        'completed': json['completed'],
    };
}

export function TodoToJSON(value?: Todo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'text': value.text,
        'completed': value.completed,
    };
}
